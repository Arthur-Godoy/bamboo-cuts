import type { AxiosResponse } from "axios";
import useHttp from ".";

export default {
    getFolders(): Promise<AxiosResponse>
    {
        return useHttp().get("/folders");
    }
}