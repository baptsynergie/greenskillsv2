import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent, b as addAttribute, d as renderHead, e as renderSlot, f as createAstro } from './astro/server_vkbS21Jx.mjs';
import 'kleur/colors';
import { $ as $$Image } from './_astro_assets_PSDc-3oT.mjs';
/* empty css                         */

const logo = new Proxy({"src":"/_astro/logo_greenskills.D_E0eisk.svg","width":152,"height":59,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/synergie/greenskillsv2/src/images/logos/logo_greenskills.svg";
							}
							
							return target[name];
						}
					});

const logoSynergie = new Proxy({"src":"/_astro/logo_synergie.BGn2K8L9.svg","width":116,"height":57,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/synergie/greenskillsv2/src/images/logos/logo_synergie.svg";
							}
							
							return target[name];
						}
					});

const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="bg-white h-24 flex items-center justify-center"> <div class="flex justify-center items-center gap-8 px-4 sm:px-6 lg:px-8 w-full"> <div class="flex justify-center items-center gap-8 px-4 sm:px-6 lg:px-8 w-full"> <a class="block" href="#"> ${renderComponent($$result, "Image", $$Image, { "src": logo, "alt": "logo green skills", "width": "120" })} </a> <div class="bg-green h-full w-[2px] py-6"></div> <a class="block" href="#"> ${renderComponent($$result, "Image", $$Image, { "src": logoSynergie, "alt": "logo green skills", "width": "120" })} </a> </div> </div> </header>`;
}, "D:/synergie/greenskillsv2/src/components/Navbar.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description } = Astro2.props;
  return renderTemplate`<html lang="en" class="scroll-smooth"> <head><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderComponent($$result, "Navbar", $$Navbar, {})} ${renderSlot($$result, $$slots["default"])}   </body> </html> `;
}, "D:/synergie/greenskillsv2/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
