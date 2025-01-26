import { Type } from "class-transformer";
import { IsArray, IsEmail, IsNotEmpty, IsString, ValidateNested } from "class-validator";

export class WorkExperienceDto {
    @IsString()
    projectName: string;
  
    @IsString()
    duration: string;
  
    @IsString()
    role: string;
  
    @IsString()
    desc: string;
}

export class EducationDto{
    @IsString()
    instituteName:String;
    
    @IsString()
    duration:String;
    
    @IsString()
    percentage:String;
    
    @IsString()
    degree:String;
}

export class ProjectDto {
    @IsString()
    projectName: string;
  
    @IsString()
    desc: string;
}

export class UserDto {
   @IsString()
   @IsNotEmpty()
   userId:string; 

   @IsNotEmpty()
   @IsString()
   resumeId: string;

   @IsString()
   @IsNotEmpty()
   title:string; 

   @IsString()
   firstName:string;

   @IsString()
   lastName:string;

   @IsString()
   role:string;

   @IsString()
   address:string;

   @IsString()
   phoneNo:string;

   @IsString()
   @IsEmail()
   email:string;

   @IsString()
   linkedIn:string;

   @IsString()
   github:string;

   @IsArray()
   @ValidateNested({ each: true }) 
   @Type(() => EducationDto) 
   education: EducationDto[];

   @IsArray()
   @ValidateNested({ each: true })
   @Type(() => WorkExperienceDto)
   workExperience: WorkExperienceDto[];
   
   @IsArray()
   @ValidateNested({ each: true })
   @Type(() => ProjectDto)
   projects: ProjectDto[];

   @IsArray()
   @IsString({ each: true })
   skills: string[];
}
