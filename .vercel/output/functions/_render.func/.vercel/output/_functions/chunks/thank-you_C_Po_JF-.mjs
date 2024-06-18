/* empty css                         */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from './astro/server_vkbS21Jx.mjs';
import 'kleur/colors';
import { $ as $$Layout } from './Layout_DK1iZV3s.mjs';

const $$ThankYou = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Merci pour votre participation !", "description": "Merci pour votre participation au formulaire green skills !" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="container flex justify-center items-center h-[90vh]"> <div id="step_tkyou"> <img alt="greens skills synergie family" src="src/images/pictos/alveole_tkpage.svg" class="absolute top-0 right-0"> <div class="flex flex-col justify-center items-center h-full"> <div class="text-green uppercase font-finalSixHeavy text-8xl text-center">Merci !</div> <div class=" font-finalSixMedium text-black text-lg text-center">Notre équipe vous recontactera dès que possible</div> <div class="mt-5"> <a class="text-green font-finalSixBold underline" href="/">Revenir vers la page de présentation</a> </div> </div> </div> </section> ` })}`;
}, "D:/synergie/greenskillsv2/src/pages/thank-you.astro", void 0);

const $$file = "D:/synergie/greenskillsv2/src/pages/thank-you.astro";
const $$url = "/thank-you";

export { $$ThankYou as default, $$file as file, $$url as url };
