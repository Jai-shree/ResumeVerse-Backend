import { Type } from "class-transformer";
import { IsArray, IsEmail, IsNotEmpty, IsString, ValidateNested } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

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
   @ApiProperty()
   @IsNotEmpty()
   userId:string; 

   @IsNotEmpty()
   @ApiProperty()
   @IsString()
   resumeId: string;

   @IsString()
   @ApiProperty()
   @IsNotEmpty()
   title:string; 

   @IsString()
   @ApiProperty()
   firstName:string;

   @IsString()
   @ApiProperty()
   lastName:string;

   @IsString()
   @ApiProperty()
   role:string;

   @IsString()
   @ApiProperty()
   address:string;

   @IsString()
   @ApiProperty()
   phoneNo:string;

   @IsString()
   @ApiProperty()
   @IsEmail()
   email:string;

   @IsString()
   @ApiProperty()
   linkedIn:string;

   @IsString()
   @ApiProperty()
   github:string;

   @IsArray()
   @ApiProperty()
   @ValidateNested({ each: true }) 
   @Type(() => EducationDto) 
   education: EducationDto[];

   @IsArray()
   @ApiProperty()
   @ValidateNested({ each: true })
   @Type(() => WorkExperienceDto)
   workExperience: WorkExperienceDto[];
   
   @IsArray()
   @ApiProperty()
   @ValidateNested({ each: true })
   @Type(() => ProjectDto)
   projects: ProjectDto[];

   @IsArray()
   @ApiProperty()
   @IsString({ each: true })
   skills: string[];
}
