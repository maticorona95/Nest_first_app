import { TaskStatus } from "../task.entity"
import { MinLength , IsNotEmpty , IsString , IsOptional , IsIn} from 'class-validator'

export class CreateTaskDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    title : string
    @IsString()
    description : string
    status : TaskStatus
}

export class UpdateTaskDto {
    @IsString()
    @IsOptional()
    title?: string

    @IsString()
    @IsOptional()
    description? : string

    @IsString()
    @IsOptional()
    @IsIn ([TaskStatus.PENDING , TaskStatus.IN_PROGRESS , TaskStatus.DONE])
    status? : TaskStatus
}