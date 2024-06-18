/* empty css                         */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, f as createAstro, a as renderComponent, u as unescapeHTML, F as Fragment } from './astro/server_vkbS21Jx.mjs';
import 'kleur/colors';
import { $ as $$Layout } from './Layout_DK1iZV3s.mjs';
import 'clsx';
import { $ as $$Image } from './_astro_assets_PSDc-3oT.mjs';
/* empty css                         */

const $$Astro$5 = createAstro();
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Header;
  const { href, title, description, textCta } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section id="header" class="pt-[var(--blocks-gap)] lg:pt-0 lg:mt-0 bg-right flex justify-center lg:items-center bg-no-repeat bg-cover bg-[url('../images/header-mobile.png')] lg:bg-[url('../images/header.png')] h-[100vh] lg:h-[500px]"> <div class="container flex flex-col gap-4 lg:gap-6"> <h1 class="font-finalSixHeavy example__slideAndRotate__text text-white text-4xl">${title}</h1> <p class=" font-finalSixMedium text-white text-xl lg:w-3/5">${description}</p> <a class="text-black font-finalSixBold bg-grey py-4 px-8 block w-fit rounded text-xl shadow-inner"${addAttribute(href, "href")}> ${textCta} </a> </div> </section>`;
}, "D:/synergie/greenskillsv2/src/components/Header.astro", void 0);

const $$Astro$4 = createAstro();
const $$Band = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Band;
  const { pdf, title, btnText, bgImage } = Astro2.props;
  console.log(bgImage.src);
  return renderTemplate`${maybeRenderHead()}<section id="band" class="bg-[url('../images/band/band.png')] h-[350px] bg-cover bg-center bg-no-repeat"> <div class="bg-green/30 h-full w-full flex justify-center items-center flex-col gap-8"> <h2 class="text-center text-white text-3xl font-finalSixBlack">${title} </h2> <a data-aos="zoom-in" class="js-dl text-black font-finalSixBold bg-grey py-4 px-8 block w-fit rounded text-xl shadow-inner"${addAttribute(pdf, "href")}> ${btnText} </a> </div> <div id="modale" class="flex transition-all invisible opacity-0 justify-center items-center fixed top-0 modale h-[100vh] w-full z-30 bg-black/30"> <div class="relative font-finalSixMedium lg:h-[380px] container rounded-xl lg:p-24 p-10 flex-col lg:flex-row flex items-center justify-center p-30 bg-white shadow-lg"> <svg id="cross" class=" self-end cursor-pointer lg:absolute lg:top-5 lg:right-5" width="50px" height="50px" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#00bf63"><path d="M6.75827 17.2426L12.0009 12M17.2435 6.75736L12.0009 12M12.0009 12L6.75827 6.75736M12.0009 12L17.2435 17.2426" stroke="#00bf63" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path></svg> <div class="flex flex-col gap-4"> <p>Pour télécharger notre plaquette PDF, veuillez remplir le champ email.
                    Nous avons besoin de votre adresse email pour procéder au téléchargement.
                    Une fois l'email renseigné, le téléchargement commencera automatiquement.
</p> <div class="text-green text-lg uppercase font-finalSixBlack ">Télécharger la plaquette : </div> <div class="lg:flex items-center mb-4 space-y-2 lg:space-y-0"> <form action="/api/contact" method="POST" id="form_plaquette" class="lg:flex items-center mb-4 space-y-2 lg:space-y-0"> <label class="hidden" for="email_pdf">Votre email  :</label> <div> <input required placeholder="Votre email" type="email" name="email_pdf" id="email_pdf" class="bg-[#F3F3F3] text-[#9E9E9E] font-finalSixMedium outline-green outline-2 py-3 px-7 lg:rounded-l-xl lg:rounded-r-none w-full rounded-lg"> </div> <button class="js-program font-finalSixMedium bg-black text-white py-3 px-7 lg:rounded-r-xl lg:rounded-l-none rounded-lg w-full lg:w-fit"> Continuer </button> </form> </div> </div> </div> </div> </section> `;
}, "D:/synergie/greenskillsv2/src/components/Band.astro", void 0);

const $$Astro$3 = createAstro();
const $$InfosBloc = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$InfosBloc;
  const { image, title, list } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="mb-5" data-aos="fade-up"> <div class="flex items-center gap-4 mb-4"> <div> ${renderComponent($$result, "Image", $$Image, { "src": image, "alt": "picto green skills", "width": "50" })} </div> <div class="text-black text-2xl font-finalSixExtraBold"> ${title} </div> </div> <ul class="list-disc list-inside font-finalSixMedium text-black pl-5"> ${list.map((item) => renderTemplate`<li>${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(item)}` })}</li>`)} </ul> </div> `;
}, "D:/synergie/greenskillsv2/src/components/InfosBloc.astro", void 0);

const picto1 = new Proxy({"src":"/_astro/picto_green1.DU36IYGc.svg","width":58,"height":58,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/synergie/greenskillsv2/src/images/pictos/picto_green1.svg";
							}
							
							return target[name];
						}
					});

const alveoles$2 = new Proxy({"src":"/_astro/alveoles.BhJs1-D-.svg","width":407,"height":281,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/synergie/greenskillsv2/src/images/pictos/alveoles.svg";
							}
							
							return target[name];
						}
					});

const team = new Proxy({"src":"/_astro/qui-sommes-nous.CxEE09UN.png","width":2715,"height":4096,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/synergie/greenskillsv2/src/images/qui-sommes-nous.png";
							}
							
							return target[name];
						}
					});

const band = new Proxy({"src":"/_astro/band.B8lE85zv.png","width":1512,"height":349,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/synergie/greenskillsv2/src/images/band/band.png";
							}
							
							return target[name];
						}
					});

const pdf = "/_astro/greenskills.CYRFxDB5.pdf";

const pictoHeart = new Proxy({"src":"/_astro/picto_heart_white 1.DNqql2QI.svg","width":100,"height":100,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/synergie/greenskillsv2/src/images/kpi/picto_heart_white 1.svg";
							}
							
							return target[name];
						}
					});

const pictoStorm = new Proxy({"src":"/_astro/picto_storm_white 1.DEUQxgML.svg","width":101,"height":100,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/synergie/greenskillsv2/src/images/kpi/picto_storm_white 1.svg";
							}
							
							return target[name];
						}
					});

const pictoLeaf = new Proxy({"src":"/_astro/picto_leaf_white 1.BM_AqDG-.svg","width":100,"height":100,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/synergie/greenskillsv2/src/images/kpi/picto_leaf_white 1.svg";
							}
							
							return target[name];
						}
					});

const $$Kpi = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="lg:flex lg:justify-between lg:items-center lg:gap-16"> <div data-aos="zoom-in" data-aos-delay="300" class="flex flex-col md:flex-row md:justify-start justify-center gap-5 mt-10 lg:mt-0"> <div class="h-[100px] w-[100px] mx-auto md:mx-0"> ${renderComponent($$result, "Image", $$Image, { "src": pictoHeart, "alt": "picto coeur", "class": "w-full h-full" })} </div> <div> <p class=" text-green font-finalSixHeavy text-6xl text-center md:text-left">6 610</p> <p class=" font-finalSixMedium text-sm text-center md:text-left">Talents impactés par les projets d'inclusion de Synergie Family en 2023</p> </div> </div> <div data-aos="zoom-in" data-aos-delay="600" class="flex flex-col md:flex-row md:justify-start justify-center gap-5 mt-10 lg:mt-0"> <div class="h-[100px] w-[100px] mx-auto md:mx-0"> ${renderComponent($$result, "Image", $$Image, { "src": pictoStorm, "alt": "picto coeur", "class": "w-full h-full" })} </div> <div> <p class=" text-green font-finalSixHeavy text-6xl text-center md:text-left">150</p> <p class=" font-finalSixBold text-sm text-center md:text-left">Demandeurs d'emploi en formation ou en emploi d'ici décembre 2025</p> </div> </div> <div data-aos="zoom-in" data-aos-delay="900" class="flex flex-col md:flex-row md:justify-start justify-center gap-5 mt-10 lg:mt-0"> <div class="h-[100px] w-[100px] mx-auto md:mx-0"> ${renderComponent($$result, "Image", $$Image, { "src": pictoLeaf, "alt": "picto coeur", "class": "w-full h-full" })} </div> <div> <p class=" text-green font-finalSixHeavy text-6xl text-center md:text-left">500</p> <p class="font-finalSixBold text-sm text-center md:text-left">Demandeurs d'emploi à sensibiliser d'ici fin 2025</p> </div> </div> </div>`;
}, "D:/synergie/greenskillsv2/src/components/Kpi.astro", void 0);

const $$Astro$2 = createAstro();
const $$EventCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$EventCard;
  const { image, date, name, description, place, delay } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a class="block flex-1" href="#step-form" data-aos="fade-up"${addAttribute(delay, "data-aos-delay")} onclick="lenis.scrollTo('#step-form')"> <div class="flex-1 shadow-lg rounded-xl transition-all hover:-translate-y-4"> <div class="h-[200px] lg:h-[200px] md:h-[400px]"> ${renderComponent($$result, "Image", $$Image, { "src": image, "alt": "image \xE9venement green skills", "class": "w-full h-full object-cover object-center rounded-t-xl" })} </div> <div class="p-5 flex flex-col gap-2"> <div class="bg-green text-white p-2 w-fit rounded-lg font-finalSixMedium"> ${date} </div> <h4 class="font-finalSixHeavy text-2xl">${name}</h4> <p class="text-md">${description}</p> <p class=" text-green">📍 ${place} </p> </div> </div> </a> `;
}, "D:/synergie/greenskillsv2/src/components/EventCard.astro", void 0);

const alveoles$1 = new Proxy({"src":"/_astro/alveoles_choice.CIW_2dT3.svg","width":289,"height":202,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/synergie/greenskillsv2/src/images/pictos/alveoles_choice.svg";
							}
							
							return target[name];
						}
					});

const arrow = new Proxy({"src":"/_astro/arrow_choice.DOBSvnRV.svg","width":126,"height":179,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/synergie/greenskillsv2/src/images/pictos/arrow_choice.svg";
							}
							
							return target[name];
						}
					});

const $$Astro$1 = createAstro();
const $$StepForm = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$StepForm;
  if (Astro2.request.method === "POST") {
    console.log(Astro2.request);
    try {
      const data = await Astro2.request.formData();
      const name = data.get("username");
      const email = data.get("email");
      const password = data.get("password");
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
    }
  }
  return renderTemplate`${maybeRenderHead()}<section id="step-form" class="pt-[var(--blocks-gap)]" data-astro-cid-gmqq2b3y> <div class="container" data-astro-cid-gmqq2b3y> <div class="flex flex-col gap-4 items-center lg:justify-between mb-[var(--blocks-gap-demi)] lg:gap-0 lg:flex-row" data-astro-cid-gmqq2b3y> <div class="flex items-center justify-center gap-4" data-astro-cid-gmqq2b3y> <svg width="51" height="58" viewBox="0 0 51 58" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-gmqq2b3y> <path d="M51 17.3007C51 15.2995 49.9472 13.4494 48.2386 12.4488L28.2619 0.750467C26.5533 -0.250156 24.4477 -0.250156 22.7381 0.750467L2.76138 12.4497C1.05283 13.4504 0 15.3004 0 17.3017V40.6993C0 42.7005 1.05283 44.5506 2.76138 45.5512L22.7381 57.2495C24.4467 58.2502 26.5523 58.2502 28.2619 57.2495L48.2386 45.5512C49.9472 44.5506 51 42.7005 51 40.6993V17.3017V17.3007ZM33.0174 31.3504L17.9557 44.0366C17.2317 44.6472 16.2289 43.8104 16.7106 42.998L21.8247 31.1924C22.0507 30.813 21.9468 30.3312 21.5882 30.0903L16.4029 27.4688C15.9491 27.1636 15.9251 26.5043 16.3548 26.1444L30.9261 13.9604C31.6463 13.3587 32.6414 14.1799 32.1741 14.9913L28.6455 26.8125C28.4119 27.2182 28.5503 27.7273 28.9541 27.9448L32.8991 29.9879C33.4087 30.263 33.4693 30.9691 33.0154 31.3504H33.0174Z" fill="white" data-astro-cid-gmqq2b3y></path> </svg> <h2 class="text-white text-3xl font-finalSixBlack" data-astro-cid-gmqq2b3y>Contactez-nous</h2> </div> <div class="flex items-center" data-astro-cid-gmqq2b3y> <button class="border-white border-solid border-[2px] w-[30px] h-[30px] rounded-full cursor-pointer step-circle active" data-astro-cid-gmqq2b3y></button> <div class="bg-white w-[60px] h-[2px]" data-astro-cid-gmqq2b3y></div> <button class="border-white border-solid border-[2px] w-[30px] h-[30px] rounded-full cursor-pointer step-circle" data-astro-cid-gmqq2b3y></button> <div class="bg-white w-[60px] h-[2px]" data-astro-cid-gmqq2b3y></div> <button class="border-white border-solid border-[2px] w-[30px] h-[30px] rounded-full cursor-pointer step-circle" data-astro-cid-gmqq2b3y></button> </div> </div> <form id="choice_form" class="shadow-lg bg-white lg:p-24 p-10 rounded-xl relative" action="/api/talentRegister" method="post" data-astro-cid-gmqq2b3y> ${renderComponent($$result, "Image", $$Image, { "src": alveoles$1, "alt": "picto choice", "class": "scale-x-[-1] js-background absolute top-0 left-0", "data-astro-cid-gmqq2b3y": true })} ${renderComponent($$result, "Image", $$Image, { "src": arrow, "alt": "picto choice", "class": "absolute bottom-0 right-4 js-arrow", "data-astro-cid-gmqq2b3y": true })} <div id="step_choice" class="js-step active-step relative justify-center items-center lg:h-[380px]" data-astro-cid-gmqq2b3y> <div data-astro-cid-gmqq2b3y> <h1 class="gap-4 font-finalSixMedium text-center mb-12 text-2xl" data-astro-cid-gmqq2b3y>Je suis ... </h1> <div class="lg:flex lg:gap-5 lg:space-y-0 space-y-5" data-astro-cid-gmqq2b3y> <button class=" js-btn-talent-form rounded-lg w-full lg:w-1/2 px-14 py-7 font-finalSixBlack text-white text-lg bg-green text-center border-solid border-[2px] border-green hover:bg-white hover:text-green transition-all" data-astro-cid-gmqq2b3y> À la recherche d'un métier vert </button> <button class=" js-btn-company-form rounded-lg w-full lg:w-1/2 px-14 py-7 font-finalSixBlack text-white text-lg bg-green text-center border-solid border-[2px] border-green hover:bg-white hover:text-green transition-all" data-astro-cid-gmqq2b3y> Une entreprise </button> </div> </div> </div> <div id="step_one" class="hidden js-step lg:h-[380px]" data-astro-cid-gmqq2b3y> <div class="w-full" data-astro-cid-gmqq2b3y> <h1 class=" flex items-center gap-4 font-finalSixMedium text-lg text-center mb-12" data-astro-cid-gmqq2b3y><span class="text-white w-[45px] h-[45px] hidden lg:block bg-green p-2 rounded-full" data-astro-cid-gmqq2b3y>1.</span> À la recherche d’un nouveau défi professionnel ?</h1> <div class="lg:flex lg:items-center lg:gap-5 mb-7" data-astro-cid-gmqq2b3y> <div class="lg:w-1/2 mb-7 lg:mb-0" data-astro-cid-gmqq2b3y> <label class="hidden" for="lastname" data-astro-cid-gmqq2b3y>Nom :</label> <input placeholder="Nom*" type="text" name="lastname" class="bg-[#F3F3F3] text-[#9E9E9E] font-finalSixMedium outline-green outline-2 py-3 px-8 rounded-lg w-full" data-astro-cid-gmqq2b3y> </div> <div class="lg:w-1/2 mb-7 lg:mb-0" data-astro-cid-gmqq2b3y> <label class="hidden" for="firstname" data-astro-cid-gmqq2b3y>Prénom :</label> <input placeholder="Prénom*" type="text" name="firstname" class="bg-[#F3F3F3] text-[#9E9E9E] font-finalSixMedium outline-green outline-2 py-3 px-8 rounded-lg w-full" data-astro-cid-gmqq2b3y> </div> </div> <div class="lg:flex lg:items-center lg:gap-5 mb-7" data-astro-cid-gmqq2b3y> <div class="lg:w-1/2 mb-7 lg:mb-0" data-astro-cid-gmqq2b3y> <label class="hidden" for="email" data-astro-cid-gmqq2b3y>Email :</label> <input placeholder="Email*" type="email" name="email" class="bg-[#F3F3F3] text-[#9E9E9E] font-finalSixMedium outline-green outline-2 py-3 px-8 rounded-lg w-full" data-astro-cid-gmqq2b3y> </div> <div class="lg:w-1/2 mb-7 lg:mb-0" data-astro-cid-gmqq2b3y> <label class="hidden" for="phone" data-astro-cid-gmqq2b3y>Téléphone :</label> <input placeholder="Téléphone*" type="tel" name="phone" class="bg-[#F3F3F3] text-[#9E9E9E] font-finalSixMedium outline-green outline-2 py-3 px-8 rounded-lg w-full" data-astro-cid-gmqq2b3y> </div> </div> <div class="lg:w-1/2" data-astro-cid-gmqq2b3y> <label class="hidden" for="city" data-astro-cid-gmqq2b3y>Ville :</label> <input placeholder="Ville*" type="text" name="city" class="bg-[#F3F3F3] text-[#9E9E9E] font-finalSixMedium outline-green outline-2 py-3 px-8 rounded-lg w-full" data-astro-cid-gmqq2b3y> </div> <div class="lg:flex lg:justify-between lg:items-center mt-7 lg:mt-0" data-astro-cid-gmqq2b3y> <p class="text-[#9E9E9E] font-finalSixMedium" data-astro-cid-gmqq2b3y>Champs obligatoires(*)</p> <div class="flex flex-col lg:flex-row lg:gap-2 gap-4" data-astro-cid-gmqq2b3y> <button class="js-btn-back-choice lg:mt-7 font-finalSixMedium border-green border-solid border-[2px] text-green bg-white  rounded-lg py-3 px-8" data-astro-cid-gmqq2b3y>Retour</button> <button class="js-next-btn mt-7 font-finalSixMedium bg-green text-white rounded-lg py-3 px-8" data-astro-cid-gmqq2b3y>Continuer</button> </div> </div> </div> </div> <div id="step_one_company" class="hidden js-step lg:h-[380px]" data-astro-cid-gmqq2b3y> <div class="w-full" data-astro-cid-gmqq2b3y> <h1 class=" flex items-center gap-4 font-finalSixMedium text-lg mb-12" data-astro-cid-gmqq2b3y><span class="text-white w-[45px] h-[45px] hidden lg:block bg-green p-2 rounded-full text-center" data-astro-cid-gmqq2b3y>1.</span> Rejoignez un collectif d’entreprises et d’organismes de formation engagés autour de la promotion des métiers verts !</h1> <div class="lg:flex lg:items-center lg:gap-5 mb-7" data-astro-cid-gmqq2b3y> <div class="lg:w-1/2 mb-7 lg:mb-0" data-astro-cid-gmqq2b3y> <label class="hidden" for="companyName" data-astro-cid-gmqq2b3y>Nom de la structure :</label> <input placeholder="Nom de la structure*" type="text" name="companyName" class="bg-[#F3F3F3] text-[#9E9E9E] font-finalSixMedium outline-green outline-2 py-3 px-8 rounded-lg w-full" data-astro-cid-gmqq2b3y> </div> <div class="lg:w-1/2 mb-7 lg:mb-0" data-astro-cid-gmqq2b3y> <label class="hidden" for="zipCode" data-astro-cid-gmqq2b3y>Code Postal :</label> <input placeholder="Code Postal*" type="text" name="zipCode" class="bg-[#F3F3F3] text-[#9E9E9E] font-finalSixMedium outline-green outline-2 py-3 px-8 rounded-lg w-full" data-astro-cid-gmqq2b3y> </div> </div> <div class="lg:flex lg:items-center lg:gap-5 mb-7" data-astro-cid-gmqq2b3y> <div class="lg:w-1/2 mb-7 lg:mb-0" data-astro-cid-gmqq2b3y> <label class="hidden" for="lastnameCompany" data-astro-cid-gmqq2b3y>Nom :</label> <input placeholder="Nom*" type="text" name="lastnameCompany" class="bg-[#F3F3F3] text-[#9E9E9E] font-finalSixMedium outline-green outline-2 py-3 px-8 rounded-lg w-full" data-astro-cid-gmqq2b3y> </div> <div class="lg:w-1/2 mb-7 lg:mb-0" data-astro-cid-gmqq2b3y> <label class="hidden" for="firstnameCompany" data-astro-cid-gmqq2b3y>Prénom :</label> <input placeholder="Prénom*" type="text" name="firstnameCompany" class="bg-[#F3F3F3] text-[#9E9E9E] font-finalSixMedium outline-green outline-2 py-3 px-8 rounded-lg w-full" data-astro-cid-gmqq2b3y> </div> </div> <div class="lg:flex lg:items-center lg:gap-5 mb-7" data-astro-cid-gmqq2b3y> <div class="lg:w-1/2 mb-7 lg:mb-0" data-astro-cid-gmqq2b3y> <label class="hidden" for="emailCompany" data-astro-cid-gmqq2b3y>Nom :</label> <input placeholder="Email*" type="email" name="emailCompany" class="bg-[#F3F3F3] text-[#9E9E9E] font-finalSixMedium outline-green outline-2 py-3 px-8 rounded-lg w-full" data-astro-cid-gmqq2b3y> </div> <div class="lg:w-1/2 mb-7 lg:mb-0" data-astro-cid-gmqq2b3y> <label class="hidden" for="phoneCompany" data-astro-cid-gmqq2b3y>Téléphone :</label> <input placeholder="Téléphone*" type="tel" name="phoneCompany" class="bg-[#F3F3F3] text-[#9E9E9E] font-finalSixMedium outline-green outline-2 py-3 px-8 rounded-lg w-full" data-astro-cid-gmqq2b3y> </div> </div> <div class="lg:flex lg:justify-between lg:items-center mt-7 lg:mt-0" data-astro-cid-gmqq2b3y> <p class="text-[#9E9E9E] font-finalSixMedium" data-astro-cid-gmqq2b3y>Champs obligatoires(*)</p> <div class="flex flex-col lg:flex-row lg:gap-2 gap-4" data-astro-cid-gmqq2b3y> <button class="js-btn-back-choice lg:mt-7 font-finalSixMedium border-green border-solid border-[2px] text-green bg-white  rounded-lg py-3 px-8" data-astro-cid-gmqq2b3y>Retour</button> <button class="js-next-btn-company mt-7 font-finalSixMedium bg-green text-white rounded-lg py-3 px-8" data-astro-cid-gmqq2b3y>Continuer</button> </div> </div> </div> </div> <div id="step_two" class="js-step hidden lg:h-[380px]" data-astro-cid-gmqq2b3y> <div class="w-full" data-astro-cid-gmqq2b3y> <h1 class=" flex items-center gap-4 font-finalSixMedium text-lg text-center mb-12" data-astro-cid-gmqq2b3y><span class="text-white w-[45px] h-[45px] hidden lg:block bg-green p-2 rounded-full" data-astro-cid-gmqq2b3y>2.</span> Laissez-nous en savoir un peu plus...</h1> <div class="lg:w-full mb-7" data-astro-cid-gmqq2b3y> <label class="hidden" for="position" data-astro-cid-gmqq2b3y>Je suis </label> <select name="position" class="bg-[#F3F3F3] text-[#9E9E9E] font-finalSixMedium outline-green outline-2 py-3 px-8 rounded-lg w-full" data-astro-cid-gmqq2b3y> <option value="" data-astro-cid-gmqq2b3y>Je suis...</option> <option value="A la recherche d’un premier travail" data-astro-cid-gmqq2b3y>A la recherche d’un premier travail</option> <option value="En reconversion professionnelle et intéressé.e par les métiers verts." data-astro-cid-gmqq2b3y>En reconversion professionnelle et intéressé.e par les métiers verts.</option> <option value="Déjà dans le secteur mais je suis actuellement sans emploi." data-astro-cid-gmqq2b3y>Déjà dans le secteur mais je suis actuellement sans emploi.</option> <option value="Peu au courant et je souhaite me sensibiliser sur les métiers verts de l’industrie pour savoir si cela peut m’intéresser." data-astro-cid-gmqq2b3y>Peu au courant et je souhaite me sensibiliser sur les métiers verts de l’industrie pour savoir si cela peut m’intéresser.</option> </select> </div> <div class="lg:w-full mb-7" data-astro-cid-gmqq2b3y> <label class="hidden" for="study" data-astro-cid-gmqq2b3y>Je suis </label> <select name="study" class="bg-[#F3F3F3] text-[#9E9E9E] font-finalSixMedium outline-green outline-2 py-3 px-8 rounded-lg w-full" data-astro-cid-gmqq2b3y> <option value="" data-astro-cid-gmqq2b3y>Quel est votre niveau d'études ?</option> <option value="Infra Bac" data-astro-cid-gmqq2b3y>Infra Bac</option> <option value="Bac professionnel" data-astro-cid-gmqq2b3y>Bac professionnel</option> <option value="Bac +2 +3 ou équivalent" data-astro-cid-gmqq2b3y>Bac +2 +3 ou équivalent</option> <option value="Bac +5 ou doctorant.e" data-astro-cid-gmqq2b3y>Bac +5 ou doctorant.e</option> </select> </div> <div class="lg:w-full mb-7" data-astro-cid-gmqq2b3y> <label class="hidden" for="howHearAboutUs" data-astro-cid-gmqq2b3y>Je suis </label> <select name="howHearAboutUs" class="bg-[#F3F3F3] text-[#9E9E9E] font-finalSixMedium outline-green outline-2 py-3 px-8 rounded-lg w-full" data-astro-cid-gmqq2b3y> <option value="" data-astro-cid-gmqq2b3y>Comment avez-vous entendu parler de notre programme ?</option> <option value="France Travail" data-astro-cid-gmqq2b3y>France Travail</option> <option value="APEC" data-astro-cid-gmqq2b3y>APEC</option> <option value="Missions locales" data-astro-cid-gmqq2b3y>Missions locales</option> <option value="Réseau sociaux et internet" data-astro-cid-gmqq2b3y>Réseau sociaux et internet</option> <option value="Réseau sociaux et internet" data-astro-cid-gmqq2b3y>Réseau sociaux et internet</option> <option value="Bouche à oreille" data-astro-cid-gmqq2b3y>Bouche à oreille</option> <option value="Autres" data-astro-cid-gmqq2b3y>Autres</option> </select> </div> <div class="lg:flex lg:justify-between lg:items-center mt-7 lg:mt-0" data-astro-cid-gmqq2b3y> <div class="mb-7 lg_mb-0" data-astro-cid-gmqq2b3y> <input type="checkbox" id="isOptin" name="isOptin" data-astro-cid-gmqq2b3y> <label class="font-finalSixMedium text-sm" for="isOptin" data-astro-cid-gmqq2b3y>En envoyant ce formulaire, j’accepte que la team Green Skills me recontacte.</label> </div> <div class="flex flex-col lg:flex-row lg:gap-2 gap-4" data-astro-cid-gmqq2b3y> <button class="js-btn-back lg:mt-7 font-finalSixMedium border-green border-solid border-[2px] text-green bg-white  rounded-lg py-3 px-8" data-astro-cid-gmqq2b3y>Retour</button> <button class="lg:mt-7 font-finalSixMedium bg-green text-white rounded-lg py-3 px-8" data-astro-cid-gmqq2b3y>Valider le formulaire</button> </div> </div> </div> </div> <div id="step_two_company" class="js-step hidden lg:h-[380px]" data-astro-cid-gmqq2b3y> <div class="w-full flex flex-col justify-between" data-astro-cid-gmqq2b3y> <h1 class=" flex items-center gap-4 font-finalSixMedium text-lg text-center mb-12" data-astro-cid-gmqq2b3y><span class="text-white w-[45px] h-[45px] hidden lg:block bg-green p-2 rounded-full" data-astro-cid-gmqq2b3y>2.</span> Laissez-nous en savoir un peu plus...</h1> <div data-astro-cid-gmqq2b3y> <div class="lg:w-full mb-7" data-astro-cid-gmqq2b3y> <input type="checkbox" id="getBackInTouch" name="getBackInTouch" value="" data-astro-cid-gmqq2b3y> <label class="font-finalSixMedium text-base" for="getBackInTouch" data-astro-cid-gmqq2b3y>Je souhaite être contacté par l’équipe Green Skills</label> </div> <div class="lg:w-full mb-7" data-astro-cid-gmqq2b3y> <input type="checkbox" id="offers" name="offers" value="" data-astro-cid-gmqq2b3y> <label class="font-finalSixMedium text-base" for="offers" data-astro-cid-gmqq2b3y>J’ai des offres d’emplois à pourvoir</label> </div> </div> <div class="lg:self-end" data-astro-cid-gmqq2b3y> <div class="flex flex-col lg:flex-row lg:gap-2 gap-4" data-astro-cid-gmqq2b3y> <button class="js-btn-back-company lg:mt-7 font-finalSixMedium border-green border-solid border-[2px] text-green bg-white rounded-lg py-3 px-8" data-astro-cid-gmqq2b3y>Retour</button> <button class="lg:mt-7 font-finalSixMedium bg-green text-white rounded-lg py-3 px-8" data-astro-cid-gmqq2b3y>Valider le formulaire</button> </div> </div> </div> </div> </form> </div> </section>  `;
}, "D:/synergie/greenskillsv2/src/components/StepForm.astro", void 0);

const partner1 = new Proxy({"src":"/_astro/marsea.BISZ4RWt.png","width":134,"height":84,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/synergie/greenskillsv2/src/images/partners/marsea.png";
							}
							
							return target[name];
						}
					});

const partner2 = new Proxy({"src":"/_astro/logo-france-travail.Daj9p1JZ.png","width":166,"height":103,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/synergie/greenskillsv2/src/images/partners/logo-france-travail.png";
							}
							
							return target[name];
						}
					});

const partner3 = new Proxy({"src":"/_astro/ministere_travail.D0We_S7p.png","width":150,"height":121,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/synergie/greenskillsv2/src/images/partners/ministere_travail.png";
							}
							
							return target[name];
						}
					});

const partner4 = new Proxy({"src":"/_astro/europe.B3XaoPy3.png","width":124,"height":84,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/synergie/greenskillsv2/src/images/partners/europe.png";
							}
							
							return target[name];
						}
					});

const partner5 = new Proxy({"src":"/_astro/ue_paca.DvUEHrlU.png","width":133,"height":72,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/synergie/greenskillsv2/src/images/partners/ue_paca.png";
							}
							
							return target[name];
						}
					});

const $$Partners = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="lg:hidden slide-content overflow-hidden w-max flex items-center gap-4" data-astro-cid-s63cuhea> <div class="slide flex gap-4 w-max mb-[var(--blocks-gap)]" data-astro-cid-s63cuhea> <div class=" bg-white w-[150px] rounded-xl shadow-lg py-3 px-6" data-astro-cid-s63cuhea> ${renderComponent($$result, "Image", $$Image, { "src": partner1, "alt": "logo synergie", "class": " h-full w-full object-contain", "data-astro-cid-s63cuhea": true })} </div> <div class=" bg-white w-[150px] rounded-xl shadow-lg py-3 px-6" data-astro-cid-s63cuhea> ${renderComponent($$result, "Image", $$Image, { "src": partner2, "alt": "logo synergie", "class": " h-full w-full object-contain", "data-astro-cid-s63cuhea": true })} </div> <div class=" bg-white w-[150px] rounded-xl shadow-lg py-3 px-6" data-astro-cid-s63cuhea> ${renderComponent($$result, "Image", $$Image, { "src": partner3, "alt": "logo synergie", "class": " h-full w-full object-contain", "data-astro-cid-s63cuhea": true })} </div> <div class=" bg-white w-[150px] rounded-xl shadow-lg py-3 px-6" data-astro-cid-s63cuhea> ${renderComponent($$result, "Image", $$Image, { "src": partner4, "alt": "logo synergie", "class": " h-full w-full object-contain", "data-astro-cid-s63cuhea": true })} </div> <div class=" bg-white w-[150px] rounded-xl shadow-lg py-3 px-6" data-astro-cid-s63cuhea> ${renderComponent($$result, "Image", $$Image, { "src": partner5, "alt": "logo synergie", "class": " h-full w-full object-contain", "data-astro-cid-s63cuhea": true })} </div> </div> <div class="slide flex gap-4 w-max mb-[var(--blocks-gap)]" data-astro-cid-s63cuhea> <div class=" bg-white w-[150px] rounded-xl shadow-lg py-3 px-6" data-astro-cid-s63cuhea> ${renderComponent($$result, "Image", $$Image, { "src": partner1, "alt": "logo synergie", "class": " h-full w-full object-contain", "data-astro-cid-s63cuhea": true })} </div> <div class=" bg-white w-[150px] rounded-xl shadow-lg py-3 px-6" data-astro-cid-s63cuhea> ${renderComponent($$result, "Image", $$Image, { "src": partner2, "alt": "logo synergie", "class": " h-full w-full object-contain", "data-astro-cid-s63cuhea": true })} </div> <div class=" bg-white w-[150px] rounded-xl shadow-lg py-3 px-6" data-astro-cid-s63cuhea> ${renderComponent($$result, "Image", $$Image, { "src": partner3, "alt": "logo synergie", "class": " h-full w-full object-contain", "data-astro-cid-s63cuhea": true })} </div> <div class=" bg-white w-[150px] rounded-xl shadow-lg py-3 px-6" data-astro-cid-s63cuhea> ${renderComponent($$result, "Image", $$Image, { "src": partner4, "alt": "logo synergie", "class": " h-full w-full object-contain", "data-astro-cid-s63cuhea": true })} </div> <div class=" bg-white w-[150px] rounded-xl shadow-lg py-3 px-6" data-astro-cid-s63cuhea> ${renderComponent($$result, "Image", $$Image, { "src": partner5, "alt": "logo synergie", "class": " h-full w-full object-contain", "data-astro-cid-s63cuhea": true })} </div> </div> </div> <div class="hidden lg:block partners-laptop" data-astro-cid-s63cuhea> <div class="container" data-astro-cid-s63cuhea> <div class="slide-laptop flex justify-center gap-4 w-full mb-[var(--blocks-gap)]" data-astro-cid-s63cuhea> <div class=" bg-white w-[150px] rounded-xl shadow-lg py-3 px-6" data-astro-cid-s63cuhea> ${renderComponent($$result, "Image", $$Image, { "src": partner1, "alt": "logo synergie", "class": " h-full w-full object-contain", "data-astro-cid-s63cuhea": true })} </div> <div class=" bg-white w-[150px] rounded-xl shadow-lg py-3 px-6" data-astro-cid-s63cuhea> ${renderComponent($$result, "Image", $$Image, { "src": partner2, "alt": "logo synergie", "class": " h-full w-full object-contain", "data-astro-cid-s63cuhea": true })} </div> <div class=" bg-white w-[150px] rounded-xl shadow-lg py-3 px-6" data-astro-cid-s63cuhea> ${renderComponent($$result, "Image", $$Image, { "src": partner3, "alt": "logo synergie", "class": " h-full w-full object-contain", "data-astro-cid-s63cuhea": true })} </div> <div class=" bg-white w-[150px] rounded-xl shadow-lg py-3 px-6" data-astro-cid-s63cuhea> ${renderComponent($$result, "Image", $$Image, { "src": partner4, "alt": "logo synergie", "class": " h-full w-full object-contain", "data-astro-cid-s63cuhea": true })} </div> <div class=" bg-white w-[150px] rounded-xl shadow-lg py-3 px-6" data-astro-cid-s63cuhea> ${renderComponent($$result, "Image", $$Image, { "src": partner5, "alt": "logo synergie", "class": " h-full w-full object-contain", "data-astro-cid-s63cuhea": true })} </div> </div> </div> </div> `;
}, "D:/synergie/greenskillsv2/src/components/Partners.astro", void 0);

const event1 = new Proxy({"src":"/_astro/business_ble.C7C85o0o.png","width":4096,"height":2732,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/synergie/greenskillsv2/src/images/card_event/business_ble.png";
							}
							
							return target[name];
						}
					});

const event2 = new Proxy({"src":"/_astro/rencontre_metiers_verts.Kmc3_KwW.png","width":4096,"height":2731,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/synergie/greenskillsv2/src/images/card_event/rencontre_metiers_verts.png";
							}
							
							return target[name];
						}
					});

const event3 = new Proxy({"src":"/_astro/eolien.CHBhmQH_.png","width":4096,"height":2731,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/synergie/greenskillsv2/src/images/card_event/eolien.png";
							}
							
							return target[name];
						}
					});

const logoGreenSkills = new Proxy({"src":"/_astro/logo_greenskills_blanc.CO-yU6W8.svg","width":185,"height":68,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/synergie/greenskillsv2/src/images/logos/logo_greenskills_blanc.svg";
							}
							
							return target[name];
						}
					});

const alveoles = new Proxy({"src":"/_astro/alveoles_footer.BWkA3OA8.svg","width":142,"height":98,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/synergie/greenskillsv2/src/images/pictos/alveoles_footer.svg";
							}
							
							return target[name];
						}
					});

const website = new Proxy({"src":"/_astro/website.DuDGT2yu.svg","width":26,"height":40,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/synergie/greenskillsv2/src/images/pictos/website.svg";
							}
							
							return target[name];
						}
					});

const insta = new Proxy({"src":"/_astro/insta.KbnYRKYE.svg","width":41,"height":40,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/synergie/greenskillsv2/src/images/pictos/insta.svg";
							}
							
							return target[name];
						}
					});

const facebook = new Proxy({"src":"/_astro/facebook.BZ8FLAVW.svg","width":41,"height":40,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/synergie/greenskillsv2/src/images/pictos/facebook.svg";
							}
							
							return target[name];
						}
					});

const linkedin = new Proxy({"src":"/_astro/linkedin.DwnMSEd4.svg","width":41,"height":40,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/synergie/greenskillsv2/src/images/pictos/linkedin.svg";
							}
							
							return target[name];
						}
					});

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  let actuallyYear = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="bg-green relative pt-[var(--blocks-gap)]"> <div class="container"> ${renderComponent($$result, "Image", $$Image, { "src": alveoles, "alt": "greenskills synergie family", "class": "absolute right-0 top-0" })} <div class="mb-6"> ${renderComponent($$result, "Image", $$Image, { "src": logoGreenSkills, "alt": "logo greenskills", "width": "185", "height": "68" })} </div> <div class="lg:flex items-center lg:justify-between"> <div> <h4 class="mb-4 font-finalSixExtraBold text-white text-xl">La Newsletter</h4> <div class="flex items-center mb-4"> <!-- TODO faire une requete ajax plutot --> <form action="/api/newsletter" class="flex items-center mb-4" id="newsletter-form" method="POST"> <label class="hidden" for="email">La newsletter :</label> <div> <input placeholder="Votre email" type="email" name="email" id="newsletter" class="bg-[#F3F3F3] text-[#9E9E9E] font-finalSixMedium outline-green outline-2 py-3 px-7 rounded-l-xl w-full"> </div> <button class="font-finalSixMedium bg-black text-white py-3 px-7 rounded-r-xl"> Je m'inscris </button> </form> </div> </div> <div class="mb-[var(--blocks-gap)] lg:mb-0"> <ul class="flex items-center gap-7"> <li class="hover:-translate-y-1 transition-all"><a href="https://synergiefamily.com/">${renderComponent($$result, "Image", $$Image, { "width": "25", "height": "25", "src": website, "alt": "picto site web synergie family" })}</a></li> <li class="hover:-translate-y-1 transition-all"><a href="https://www.instagram.com/synergiefamily/">${renderComponent($$result, "Image", $$Image, { "width": "25", "height": "25", "src": insta, "alt": "picto instagram synergie family" })}</a></li> <li class="hover:-translate-y-1 transition-all"><a href="https://www.facebook.com/synergiefamily/?locale=fr_FR">${renderComponent($$result, "Image", $$Image, { "width": "25", "height": "25", "src": facebook, "alt": "picto facebook synergie family" })}</a></li> <li class="hover:-translate-y-1 transition-all"><a href="https://fr.linkedin.com/company/synergie-family">${renderComponent($$result, "Image", $$Image, { "width": "25", "height": "25", "src": linkedin, "alt": "picto linkedin synergie family" })}</a></li> </ul> </div> </div> <div class="p-6"> <div class="text-center text-white font-finalSixBold text-lg">©${actuallyYear} - GreenSkills</div> <div class="text-center font-finalSixBook text-sm underline text-white"><a href="#"> Mentions légales</a></div> </div> </div> </footer> `;
}, "D:/synergie/greenskillsv2/src/components/Footer.astro", void 0);

const pictoLight = new Proxy({"src":"/_astro/picto_light.ChczmOec.svg","width":35,"height":53,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/synergie/greenskillsv2/src/images/pictos/picto_light.svg";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro();
const $$BlocProgram = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlocProgram;
  const { picto, title, list } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div data-aos="fade-up" class="relative z-10 rounded-xl bg-green text-white py-7 px-10 lg:flex lg:justify-between mt-[var(--blocks-gap-demi)] drop-shadow-lg"> <div class="flex items-center gap-5 mb-5 lg:mb-0"> <div> ${renderComponent($$result, "Image", $$Image, { "src": picto, "width": "34", "height": "52", "alt": "picto programme green skils" })} </div> <p class=" text-white font-finalSixExtraBold text-2xl">${title}</p> </div> <ul class="list-disc space-y-5"> ${list.map((item) => renderTemplate`<li class="text-white font-finalSixBold text-base">${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(item)}` })}</li>`)} </ul> </div> `;
}, "D:/synergie/greenskillsv2/src/components/BlocProgram.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const list1 = [
    '<span class=" font-finalSixExtraBold">Secteur de l\u2019\xE9nergie verte :</span> nouveaux syst\xE8mes industriels et \xE9nergies renouvelables (\xE9olien en mer, hydrog\xE8ne vert, photovolta\xEFque, biogaz & biomasse...)',
    '<span class=" font-finalSixExtraBold">\xC9conomie circulaire : </span>recyclage, traitement et transformation des d\xE9chets du b\xE2timent, de la mer)'
  ];
  const list2 = [
    '<span class=" font-finalSixExtraBold">Bouches-du-Rh\xF4ne :</span> avec un focus sur les bassins d\u2019emploi de Marseille, \xC9tang de Berre et Fos/Gardanne'
  ];
  const listProgram = [
    "Ateliers \u201CD\xE9couverte M\xE9tiers\u201D dans des \xE9v\xE9nements et forums emploi",
    "Accompagnement personnalis\xE9 des candidats int\xE9ress\xE9s",
    "Immersions, d\xE9couverte des entreprises et de leurs m\xE9tiers, \xE9v\xE9nements de recrutements ludiques"
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "GreenSkills", "description": "meta description" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "title": "Votre partenaire emploi", "description": "Face aux enjeux li\xE9s \xE0 la transition \xE9nerg\xE9tique et aux besoins en main d'\u0153uvre qualifi\xE9e des entreprises, Green Skills est un programme de sensibilisation, de d\xE9couverte et d\u2019orientation de demandeurs d\u2019emploi vers les nouveaux m\xE9tiers verts.", "href": "#", "textCta": "En savoir plus" })} ${maybeRenderHead()}<section id="who-whe-are" class="margin-block relative pb-[var(--blocks-gap)]"> ${renderComponent($$result2, "Image", $$Image, { "src": alveoles$2, "alt": "image de l'\xE9quipe", "class": "absolute bottom-0 right-0 z-0" })} <!-- <Image src={arrow} alt="image de l'équipe" class="absolute left-0 top-0 hidden lg:block" />
	<Image src={arrow2} alt="image de l'équipe" class="absolute right-0 top-0 lg:hidden" /> --> <div class="container"> <h2 class="text-center text-black text-3xl font-finalSixBlack mb-5">Green Skills</h2> <h3 class="mb-[var(--blocks-gap-demi)] lg:w-7/12 lg:mx-auto font-finalSixMedium text-2xl text-center"> c'est le programme qui répond aux besoins en recrutement
			sur ces nouveaux métiers en pleine transformation.</h3> <div class="content space-y-8 lg:space-y-0 lg:flex lg:items-center lg:gap-14"> <div class="lg:flex-[2_2_0%] h-[365px]"> ${renderComponent($$result2, "Image", $$Image, { "src": team, "alt": "image de l'\xE9quipe", "class": " drop-shadow-lg z-10 h-full w-full object-cover object-center rounded-xl" })} </div> <div class="lg:flex-[5_5_0%] lg:space-y-0 relative z-10"> ${renderComponent($$result2, "InfosBloc", $$InfosBloc, { "image": picto1, "title": "Les m\xE9tiers verts \xE9ligibles au FTJ Green Skills", "list": list1 })} ${renderComponent($$result2, "InfosBloc", $$InfosBloc, { "image": picto1, "title": "Notre p\xE9rim\xE8tre g\xE9ographique", "list": list2 })} </div> </div> ${renderComponent($$result2, "BlocProgram", $$BlocProgram, { "picto": pictoLight, "title": "Au programme...", "list": listProgram })} </div> </section> <section class="bg-[#F7F7F7] py-[var(--blocks-gap)]"> <div class="container"> <h2 class=" text-green text-3xl font-finalSixBlack mb-[var(--blocks-gap-demi)]">Les chiffres clés</h2> ${renderComponent($$result2, "Kpi", $$Kpi, {})} </div> </section> ${renderComponent($$result2, "StepForm", $$StepForm, {})} <section id="event" class="margin-block"> <h2 class="text-center text-black text-3xl font-finalSixBlack mb-[var(--blocks-gap-demi)]">Nos événements</h2> <div class="container lg:flex lg:items-center lg:gap-20 space-y-8 lg:space-y-0 pb-[var(--blocks-gap)]"> ${renderComponent($$result2, "EventCard", $$EventCard, { "image": event1, "date": "06/06/2024", "name": "Le business est dans le bl\xE9", "place": "Forum entreprises", "description": "Forum entreprises", "delay": "300" })} ${renderComponent($$result2, "EventCard", $$EventCard, { "image": event2, "date": "06/06/2024", "name": "Rencontre et d\xE9couverte des m\xE9tiers verts", "place": "L'\xC9pop\xE9e village", "description": "", "delay": "600" })} ${renderComponent($$result2, "EventCard", $$EventCard, { "image": event3, "date": "01/07/2024", "name": "Semaine th\xE9matique autour des m\xE9tiers de l\u2019\xE9olien", "place": "L'\xC9pop\xE9e village", "description": "", "delay": "900" })} </div> </section> ${renderComponent($$result2, "Band", $$Band, { "pdf": pdf, "title": "Envie d'en savoir plus ?", "btnText": "T\xE9l\xE9charger la plaquette", "bgImage": band })} <section id="support" class="margin-block overflow-hidden"> <div> <h2 class="text-center text-black text-3xl font-finalSixBlack mb-[var(--blocks-gap-demi)]">Projet porté et soutenu par</h2> ${renderComponent($$result2, "Partners", $$Partners, {})} </div> </section> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "D:/synergie/greenskillsv2/src/pages/index.astro", void 0);

const $$file = "D:/synergie/greenskillsv2/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
