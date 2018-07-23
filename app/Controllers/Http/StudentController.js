'use strict'

const Student = use('App/Models/Student')

class StudentController {

    async index({response}) {
        let students = await Student.all();

        return response.json(students)
    }

    async show({params, response}) {
        const student = await Student.find(params.id)

        return response.json(student)
    }

    async store({request, response}) {
        const studentRequest = request.only(['name', 'address', 'phone', 'date_of_birth'])

        const student = new Student()
        student.name = studentRequest.name
        student.address = studentRequest.address
        student.phone = studentRequest.phone
        student.date_of_birth = studentRequest.date_of_birth

        await student.save()

        return response.status(201).json(student)
    }

    async update({request, params, response}) {
        const studentRequest = request.only(['name', 'address', 'phone', 'date_of_birth'])

        const student = await Student.find(params.id)
        if (!student) {
            response.status(404).json({data: 'Resource not found'})
        }

        student.name = studentRequest.name
        student.address = studentRequest.address
        student.phone = studentRequest.phone
        student.date_of_birth = studentRequest.date_of_birth

        await student.save();

        return response.status(200).json(student);
    }

    async delete({params, response}) {
        const student = await Student.find(params.id)
        if (!student) {
            return response.status(404).json({data: 'Resource not found'})
        }

        await student.delete()

        return response.status(204).json(null)
    }
}

module.exports = StudentController
