import type { AxiosResponse } from "axios";
import useHttp from ".";

export type VideoFilters = {
    root_fodler?: string,
    page?: number,
    title?: string,
    status?: string,
    folder_id?: string,
}

export default {
    getVideos(filters: VideoFilters = {}): Promise<AxiosResponse>
    {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const params = new URLSearchParams(filters as any);

        return useHttp().get(`/videos?${params.toString()}`);
    }
}