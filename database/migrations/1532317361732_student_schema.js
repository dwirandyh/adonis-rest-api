'use strict'

const Schema = use('Schema')

class StudentSchema extends Schema {
    up() {
        this.create('students', (table) => {
            table.increments()
            table.string('name')
            table.string('address')
            table.string('phone')
            table.date('date_of_birth')
            table.timestamps()
        })
    }

    down() {
        this.drop('students')
    }
}

module.exports = StudentSchema
