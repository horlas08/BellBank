import {ClassValue, clsx} from "clsx";
import {twMerge} from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const appleUrl = 'https://apps.apple.com/app/id6478017803';

export const playStoreUrl = "https://play.google.com/store/apps/details?id=com.bellmonie.user";