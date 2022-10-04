import { Client } from '@notionhq/client'
import camelcase from 'camelcase'

const client = new Client({ auth: process.env.NOTION_ACCESS_TOKEN })

export async function fetchProductions() {
  const productions = await client.databases.query({
    database_id: process.env.NOTION_PRODUCTIONS_DATABASE_ID
  })
  return productions.results.map(extractProduction)
}

const extractProduction = ({ properties }) =>
  Object.fromEntries(Object.entries(properties).map(extractValue))

const extractValue = ([key, value]) =>
  [
    camelcase(key),
    value.type === 'title' ? value[value.type][0]?.plain_text : value[value.type]
  ]