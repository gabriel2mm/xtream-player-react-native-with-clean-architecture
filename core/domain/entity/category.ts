import { CategoryEnum } from "../enumerator/category.enum";

export default class Category {
	constructor(readonly category_id: string, readonly category_name: string, readonly parent_id: number, readonly type: CategoryEnum) { }
}