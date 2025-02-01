import type { AxiosResponse } from "axios";
import useHttp from ".";

export type VideoFilters = {
    root_fodler?: string,
    page?: number,
    title?: string,
    status?: string,
    folder_id?: string,
    limit?: number
}

export default {
    getVideos(filters: VideoFilters = {}): Promise<AxiosResponse>
    {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const params = new URLSearchParams(filters as any);

        return useHttp().get(`/videos?${params.toString()}`);
    },

    showVideo(videoId: string): Promise<AxiosResponse>
    {
        return useHttp().get(`/videos/${videoId}`);
    },

    editDescription(videoId: string, data: {title: string, description: string | undefined}): Promise<AxiosResponse>
    {
        return useHttp().put(`/videos/${videoId}`, data);
    }
}