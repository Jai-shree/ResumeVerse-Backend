import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Type } from "class-transformer";


@Schema()
export class Education{
    @Prop()
    instituteName:String;

    @Prop()
    duration:String;

    @Prop()
    percentage:String;

    @Prop()
    degree:String;
}
const EducationSchema = SchemaFactory.createForClass(Education);

@Schema()
export class WorkExperience{
    @Prop()
    projectName:String

    @Prop()
    startDate:String;

    @Prop()
    endDate:String;

    @Prop()
    role:String;

    @Prop()
    desc:String;
}
const WorkSchema = SchemaFactory.createForClass(WorkExperience);

@Schema()
export class Project{
    @Prop()
    projectName: String;

    @Prop()
    desc: String;
}
const ProjectSchema = SchemaFactory.createForClass(Project)

@Schema({collection:"info"})
export class User{
    
    @Prop()
    userId:String;

    @Prop()
    title:String;

    @Prop()
    firstName:String;

    @Prop()
    lastName:String;

    @Prop()
    role:String;

    @Prop()
    address:String;

    @Prop()
    phoneNo:String;

    @Prop()
    email:String;

    @Prop()
    linkedin:String;

    @Prop()
    github:String;

    @Prop({ type: [EducationSchema] })
    @Type(() => Education)
    education: Education[]; 

    @Prop({ type: [String] })
    skills: string[];

    @Prop({ type: [WorkSchema] })
    @Type(() => WorkExperience)
    workExperience: WorkExperience[];

    @Prop({ type: [ProjectSchema] })
    @Type(() => Project)
    projects: Project[];

    @Prop()
    resumeId:string;
}

export const UserSchema = SchemaFactory.createForClass(User);
