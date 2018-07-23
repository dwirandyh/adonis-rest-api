'use strict'

const {test, trait} = use('Test/Suite')('Api Student')
const Student = use('App/Models/Student')

trait('Test/ApiClient')

test('get list of students', async ({client}) => {
    await Student.create({
        name: 'Dwi Randy Herdinanto',
        address: 'Jl RA Basyid Labuhan Dalam',
        phone: '089990802xx',
        date_of_birth: '1996-03-19'
    })

    const response = await client.get('/api/v1/student').end()

    response.assertStatus(200)
    response.assertJSONSubset([{
        name: 'Dwi Randy Herdinanto',
        address: 'Jl RA Basyid Labuhan Dalam',
        phone: '089990802xx'
    }])
})

test('create new student', async ({client}) => {
    let student = {
        name: 'Raihan',
        address: 'Jl RA Basyid',
        phone: '0895234523',
        date_of_birth: '2001-03-19'
    }

    const response = await client.post('/api/v1/student').send(student).end()

    response.assertStatus(201)
    response.assertJSONSubset(student)
})

test('get student by id', async ({client}) => {

    const response = await client.get('/api/v1/student/11').end();

    response.assertStatus(204)

})

test('update student', async ({client}) => {
    let student = {
        name: 'Raihan Edit',
        address: 'Jl RA Basyid',
        phone: '0895234523',
        date_of_birth: '2001-03-19'
    }

    const response = await client.put('/api/v1/student/22').end();

    response.assertStatus(200)
})

test('delete student by id', async ({client}) => {
    const response = await client.delete('/api/v1/student/22').end()

    response.assertStatus(204)
})
