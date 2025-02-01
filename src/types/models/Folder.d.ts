export type Folder = {
    id: string;
    name: string;
    user_id: string;
    parent_folder_id: number | null;
    status: boolean;
    created_at: string;
    updated_at: string;
    videos_count: string;
};