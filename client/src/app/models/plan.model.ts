export class Plan {
  _id: string;
  userId: string;
  // date: Date;
  title: string;
  description: string;
  dueDate: Date;
  progress: number;
  priority: number;
  subPlans: SubPlan[];

  constructor(id:string, userId: string, title: string, description: string, dueDate: Date, progress: number, priority: number) {
    this._id = id;
    this.userId = userId;
    // this.date = date;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.progress = progress;
    this.priority = priority;
    this.subPlans = [];
  }

  setProgress(progress: number) {
    this.progress = progress;
  }

  addSubplan(subPlan: SubPlan) {
    this.subPlans.push(subPlan);
  }

  addSubplans(subPlans: SubPlan[]) {
    this.subPlans.push(...subPlans);
  }
}

export class SubPlan {
  title: string;
  description: string;
  priority: number;
  isDone: boolean;

  constructor(title: string, description: string, priority: number, isDone = false) {
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.isDone = isDone;
  }
}
