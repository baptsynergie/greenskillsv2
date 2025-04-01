import type {ImageMetadata} from "astro";

export default interface Event {
    id: number;
    title: string;
    description: string;
    image: ImageMetadata;
    ctaName: string;
    ctaLink: string;
    dateBegin: Date;
    dateEnd: Date;
    place: string;
}