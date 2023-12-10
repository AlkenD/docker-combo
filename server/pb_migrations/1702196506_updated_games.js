/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cd9uh8q9uj20s2c")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wiyev50k",
    "name": "winner",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "kxe9hyltinhcga7",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cd9uh8q9uj20s2c")

  // remove
  collection.schema.removeField("wiyev50k")

  return dao.saveCollection(collection)
})
