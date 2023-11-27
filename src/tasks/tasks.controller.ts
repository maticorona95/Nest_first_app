import { Body ,Controller , Get , Post , Delete , Param , Patch } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto, UpdateTaskDto} from './dto/task.dto'

@Controller('tasks')
export class TasksController {
   
 constructor(private TasksService : TasksService) {}      

       @Get()
       getAllTasks() {
        return this.TasksService.getAllTasks()
       }
       @Post ()
       createTask(@Body() newTask : CreateTaskDto) {
            
             return this.TasksService.CreateTasks( newTask.title , newTask.description)
       }

       @Delete(':id')
       deleTask(@Param('id') id : string) {
            this.TasksService.deleteTasks(id)
       }

       @Patch ("id") 
       updateTask(@Param('id') id : string , @Body () updatedFields: UpdateTaskDto) {
          return  this.TasksService.updateTasks(id , updatedFields)

       }
}
