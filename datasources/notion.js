import { Client } from '@notionhq/client'

const client = new Client({ auth: process.env.NOTION_ACCESS_TOKEN })

export async function fetchProductions() {
  const productions = await client.databases.query({
    database_id: process.env.NOTION_PRODUCTIONS_DATABASE_ID
  })
  return productions.results.map(production => production.properties)
}