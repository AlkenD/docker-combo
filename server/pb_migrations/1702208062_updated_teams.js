/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kxe9hyltinhcga7")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "omizsdek",
    "name": "points",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 0,
      "max": 30,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kxe9hyltinhcga7")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "omizsdek",
    "name": "points",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 0,
      "max": 15,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
})
