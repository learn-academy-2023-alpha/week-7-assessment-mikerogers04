# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: To fix the mistake, you can create a migration to add in the foriegn key column. 

First in the Terminal, you want to run the command: rails migration add_column_cohort_id_to_students
A migration file will be created. In the migration file you will want to add the following code: add_column :students :cohort_id :integer
Once the file is saved, run the commad: rails db:migrate 
This will update the schema file with the newly added column. Verify by checking schema file to see if column was created successfully. 

Researched answer: While this alternative is not best practice, if you have not migrated your database yet. You can go into the schema file itself and add/edit any information for your model. Highly advised not to do this because in my opinion it defeats the purpose of migrations. Also, migrations are a log of all the changes you have made to your model. So, if you go through a lot of migrations and end up coming into problems. You can reference those migration files to check for any issues. 

2. Which RESTful routes must always be passed params? Why?

Your answer: The RESTful routes that always need a param passed are show, edit, update, and delete. Show, update and delete all need an id to do an action on. While edit may return a form to the user, an id is still needed for the database to return which entry to be edited. 

Researched answer: Index, new, and create are the only RESTful routes that do not need a param passed. Index does not require params because it is a display route only. Create does not need any params because it is only creating an instance in the database. Show is used for displaying specific instances in the database. New does not need any params because it displays an html form for the user to add information for creation. 

3. Name three rails generator commands. What is created by each?

Your answer:
1. rails g model Student name:string cohort:string
    -Creates a model(table) for the Rails application and defining the column names and data types. 
2. rails g resource Student name:string cohort:string
    -Creates the model and initial migration, a controller to define CRUD methods, and a routes file for RESTful routes. 
3. rails g controller Main
    -Creates a controller file for all CRUD methods to be defined in. 

Researched answer:
4. rails g rspec:install
    -Creates the rspec fils needed to run Rspec testing.

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students
Controller Method: /students#index
This action will show ALL instances in the the database. 

action: "POST" location: /students
Controller Method: /students#create
This action will create a single instance in the database.

action: "GET" location: /students/new
Controller Method: /studnets#new
This action will show the user a form they can interact with to add a new instance to the database. 

action: "GET" location: /students/2
Controller Method: /students#show[:id]
This action will show a specific instance in the database by the provided id number.

action: "GET" location: /students/2/edit
Controller Method: /students#edit[:id]
This action will return a form for editing an entry in the database. 

action: "PATCH" location: /students/2
Controller Method: /students#update[:id]
This action will update the instance that is provided by the id number. 

action: "DELETE" location: /students/2
Controller Method: /students#delete[:id]
This action will delete the instance that is provided by the id number. 

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

Note: Used Blog Post App as a guide  

To-Do List Application
As a developer, I have tasked myself with creating an application to manage my to do list.

User Story 1: As a user of the application, I need to be able to manage tasks. 
-Create a resource for tasks with the given information: task name, comepleted or not completed tasks, and date
User Story 2: As a user, I can view all entries in the database
User Story 3: As a user, I can create new tasks in the database
User Story 4: As a user, I can an edit/update existing tasks if they are completed or not
User Story 5: As a user, I can delete any tasks that are comepleted or no longer need to be done
User Story 6: As a user, I can associate tasks with sub-tasks 
-Create a resource for sub asks with the given information: sub-task name, comepleted or not completed sub-tasks, date, and task_id(foreign key)
User Story 7: As a user, I can create new sub-tasks into the database
User Story 8: As a user, I can edit/update existings sub-tasks
User Story 9: As a user, I can delete sub-tasks if they are comepleted or no longer needed.
User Story 10: As a user, I can add validations for data in both tables












