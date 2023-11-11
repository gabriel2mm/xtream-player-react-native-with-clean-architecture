export class CategoryModel { 
    category_id: string | undefined;
    category_name: string | undefined;
    parent_id: number | undefined;
    type: 'live' | 'vod' | 'series' = 'live';
}