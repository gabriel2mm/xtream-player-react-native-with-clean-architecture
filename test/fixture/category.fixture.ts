import Category from "@core/domain/entity/category";
import { CategoryEnum } from "@core/domain/enumerator/category.enum";

export const categories: Category[] = [new Category("1234", "teste", 123, CategoryEnum.LIVE)];