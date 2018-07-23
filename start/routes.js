'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

const Route = use('Route')

Route.on('/').render('welcome')

Route.group(() => {
    Route.get('student', 'StudentController.index')
    Route.get('student/:id', 'StudentController.show')
    Route.post('student', 'StudentController.store')
    Route.put('student/:id', 'StudentController.update')
    Route.delete('student/:id', 'StudentController.delete')
}).prefix('api/v1')