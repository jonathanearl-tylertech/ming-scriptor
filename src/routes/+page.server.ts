import { redirect } from "@sveltejs/kit";
import type { PageServerLoadEvent } from "./$types";

export function load({ params }: PageServerLoadEvent) {
    redirect(302, '/sites');
}