/* ========================= */
/* SIDEBAR */
/* ========================= */
const toggleBtn = document.getElementById("menuToggle");
const sidebar = document.querySelector(".sidebar");
const main = document.querySelector(".main-content");

toggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("hidden");
    main.classList.toggle("full");

    if (sidebar.classList.contains("hidden")) {
        toggleBtn.style.left = "20px";
        toggleBtn.textContent = "→";
    } else {
        toggleBtn.style.left = "275px";
        toggleBtn.textContent = "☰";
    }
});

/* ========================= */
/* JOGO ATUAL */
/* ========================= */
let currentGame = "gta3";

/* ========================= */
/* BANCO DE DADOS (SEM CAMINHOS DAS TRANSIÇÕES) */
/* ========================= */
const games = {
    gta1: {
        title: "GTA 1",
        video: "", 
        image: "gta1.png",
        transitionVideo: "gta1_logo.mp4",
        buyLink: "#",
        story: { 
            title: "GTA 1", 
            image: "gta1.png", 
            content: [
                { type: "intro", text: "Em 1997, o primeiro Grand Theft Auto revolucionou a indústria ao inverter os papéis tradicionais, colocando o jogador na pele de um criminoso ambicioso sob as ordens de sindicatos implacáveis." },
                { type: "ascensao", text: "Com a clássica perspectiva aérea (top-down view), a jogabilidade recompensava a audácia: quanto maior o caos espalhado, mais pontos e dinheiro você acumulava para subir na hierarquia das ruas." },
                { type: "conflito", text: "Para dominar o submundo, o objetivo final era faturar alto o bastante para viajar e estender sua influência pelas três metrópoles icônicas que moldariam o futuro da franquia: Liberty City, Vice City e San Andreas." },
                { type: "dados", text: "📍 Cidades: Liberty City, Vice City e San Andreas | 📅 Ano: 1997 | 🎮 Visão: Clássica Top-Down" }
            ]
        },
        characters: [
            { name: "BUBBA", image: "bubba.png", description: "Um dos bandidos clássicos selecionáveis. Conhecido por sua frieza ao aceitar os trabalhos mais sujos da cidade sem fazer perguntas." },
            { name: "TROY", image: "troy.png", description: "Vigarista audacioso disponível para o jogador. Especialista em fugas rápidas e em se enfiar nas missões mais caóticas das gangues." },
            { name: "KIVLOV", image: "kivlov.jpg", description: "O implacável chefe do crime que comanda as operações à distância. Ele distribui ordens perigosas e contratos de assassinato através de telefones públicos." }
        ],
        gallery: ["gta1C1.jpg", "gta1C2.jpg", "gta1C3.jpg", "gta1C4.jpg"]
    },

    gta2: {
        title: "GTA 2",
        video: "",
        image: "gta2.png",
        transitionVideo: "gta2_logo.mp4",
        buyLink: "#",
        story: { 
            title: "GTA 2", 
            image: "gta2.png", 
            content: [
                { type: "intro", text: "Situado na cinzenta e distópica metrópole retro-futurista de Anywhere City, o segundo capítulo expandiu drasticamente a fórmula de liberdade e destruição em mundo aberto." },
                { type: "ascensao", text: "O grande trunfo foi o inovador sistema de 'Respeito'. Ao fechar contratos para uma facção, o jogador automaticamente irritava as rivais, transformando os bairros em zonas de guerra dinâmicas." },
                { type: "conflito", text: "No controle do mercenário Claude Speed, o jogador precisa equilibrar alianças perigosas e perseguições policiais insanas entre os Loonies, a Yakuza e a poderosa corporação Zaibatsu para reinar no caos." },
                { type: "dados", text: "📍 Local: Anywhere City | 📅 Ano: 1999 | 🎮 Protagonista: Claude Speed" }
            ]
        },
        characters: [
            { name: "CLAUDE SPEED", image: "claude.jpg", description: "Um anti-herói frio e calculista que não possui lealdade a nenhuma bandeira. Seu único objetivo é sabotar e destruir os chefões de Anywhere City de dentro para fora." },
            { name: "TREY WELSH", image: "trey.jpg", description: "O sofisticado e impiedoso executivo que dita as regras no Distrito Comercial em nome da megacorporação Zaibatsu, EDI-minando qualquer concorrência." },
            { name: "ELMO", image: "elmo.jpg", description: "O líder lunático e completamente imprevisível da gangue dos Loonies. Ele usa táticas insanas e explosivas para desestabilizar as corporações rivais." }
        ],
        gallery: ["gta2C1.jpg", "gta2C2.png", "gta2C3.jpg", "gta2C4.jpg"]
    },

    gta3: {
        title: "GTA III",
        video: "gta3.mp4",
        image: "",
        transitionVideo: "gta3_logo.mp4",
        buyLink: "#",
        story: {
            title: "GTA III",
            image: "gta3H.jpg",
            content: [
                { type: "intro", text: "Traído e baleado por sua própria namorada, Catalina, durante um assalto a banco que deu errado, Claude é deixado para morrer nas calçadas gélidas de Liberty City." },
                { type: "ascensao", text: "Após escapar de um camburão da polícia, o protagonista começa do mais absoluto zero nas ruas esquecidas pela lei, fazendo bicos para a Máfia Leone e escalando o crime organizado." },
                { type: "conflito", text: "Cercado por cartéis violentos, a Yakuza e policiais corruptos, o assassino mudo joga as facções umas contra as outras, construindo uma trilha de sangue com um único alvo: sua vingança." },
                { type: "dados", text: "📍 Local: Liberty City | 📅 Ano: 2001 | 🎮 Protagonista: Claude | 👤 Antagonista: Catalina" }
            ]
        },
        characters: [
            { name: "CLAUDE", image: "claude.png", description: "O icônico protagonista mudo da virada do 3D. Movido por puro rancor, ele executa qualquer contrato com precisão cirúrgica sem nunca dizer uma única palavra." },
            { name: "CATALINA", image: "catalina.png", description: "A explosiva e traiçoeira ex-namorada de Claude. Assumiu a liderança do Cartel Colombiano e usa o tráfico da droga SPANK para sufocar e dominar toda a cidade." },
            { name: "ASUKA KASEN", image: "asuka.jpg", description: "A orgulhosa e letal co-líder da Yakuza. Ela enxerga o potencial de Claude, servindo como uma mentora estratégica que abre as portas do submundo corporativo e criminoso para ele." }
        ],
        gallery: ["gta3C1.jpg", "gta3C2.jpg", "gta3C3.jpg", "gta3C4.png"]
    },

    vice: {
        title: "VICE CITY",
        video: "gtavc.mp4",
        image: "",
        transitionVideo: "gtavc_logo.mp4",
        buyLink: "#",
        story: { 
            title: "VICE CITY", 
            image: "gtavcH.jpg", 
            content: [
                { type: "intro", text: "Em 1986, após puxar 15 anos de cadeia para proteger a Família Forelli, o mafioso Tommy Vercetti é enviado para os becos tropicais de Vice City para expandir os negócios." },
                { type: "ascensao", text: "Ao cair em uma emboscada armada e perder a grana do chefe, Tommy se recusa a fugir. Em vez disso, decide cobrar os culpados e tomar as rédeas do tráfico local." },
                { type: "conflito", text: "Comprando propriedades, eliminando cartéis rivals e montando um império bilionário regado a muito neon e cocaína, ele declara guerra aos seus antigos chefes de Liberty City." },
                { type: "dados", text: "📍 Local: Vice City | 📅 Ano: 1986 | 🎮 Protagonista: Tommy Vercetti" }
            ]
        },
        characters: [
            { name: "TOMMY VERCETTI", image: "tommy.jpg", description: "O 'Açougueiro de Harwood'. Dono de um temperamento explosivo e camisas floridas, ele usa sua experiência militar para subjugar a concorrência e virar o rei indiscutível de Vice City." },
            { name: "LANCE VANCE", image: "lance.jpg", description: "Um piloto de helicóptero estiloso, mas profundamente instável e ressentido. Une forças com Tommy para vingar o irmão assassinado, embora sua carência por respeito o torne perigoso." },
            { name: "RICARDO DIAZ", image: "diaz.jpg", description: "O atual barão das drogas da cidade. Um bilionário sociopata e extremamente paranoico que comanda a cidade de sua mansão, eliminando qualquer um que ameace seu monopólio." }
        ],
        gallery: ["vc1.jpg", "vc2.jpg", "vc3.jpg", "vc4.jpg"]
    },

    sa: {
        title: "SAN ANDREAS",
        video: "",
        image: "gtasa.jpg",
        transitionVideo: "gtasa_logo.mp4",
        buyLink: "https://www.rockstargames.com/br/games/gta",
        story: { 
            title: "SAN ANDREAS", 
            image: "gtasaH.jpg", 
            content: [
                { type: "intro", text: "Em 1992, Carl Johnson (CJ) deixa Liberty City e retorna para a periferia de Los Santos após descobrir o trágico assassinato de sua mãe em um ataque de gangues rivais." },
                { type: "ascensao", text: "Prensado imediatamente por policiais corruptos da C.R.A.S.H., CJ assume a missão de reerguer a decadente Grove Street Families e salvar o que restou de seus irmãos e amigos." },
                { type: "conflito", text: "Vítima de uma traição devastadora vinda de dentro de sua própria casa, CJ is exilado e forçado a cruzar todo o estado de San Andreas, acumulando aliados poderosos para reconquistar suas ruas." },
                { type: "dados", text: "📍 Local: Estado de San Andreas | 📅 Ano: 1992 | 🎮 Protagonista: Carl Johnson (CJ)" }
            ]
        },
        characters: [
            { name: "CJ (CARL JOHNSON)", image: "CJ.jpg", description: "O líder resiliente da Grove Street. Diferente de outros mafiosos, ele luta para proteger sua comunidade e família, evoluindo de um garoto de rua para um magnata do crime." },
            { name: "BIG SMOKE", image: "big.webp", description: "O veterano calculista da Grove. Dono de discursos filosóficos e um apetite gigante, ele esconde uma ambição oculta que o levou a fechar pactos com os Ballas e o tráfico." },
            { name: "RYDER", image: "ryder.jpg", description: "O gângster rústico e viciado de Los Santos. Sempre armado e fumando, vive se gabando de sua inteligência, mas sua impulsividade esconde fraquezas cruciais." }
        ],
        gallery: ["gtasaC1.jpg", "gtasaC2.jpg", "gtasaC3.jpg", "gtasaC4.jpg"]
    },

    iv: {
        title: "GTA IV",
        video: "gta4.mp4",
        image: "",
        transitionVideo: "gta4_logo.mp4",
        buyLink: "#",
        story: { 
            title: "GTA IV", 
            image: "gta4H.jpg", 
            content: [
                { type: "intro", text: "O veterano das guerras balcânicas Niko Bellic desembarca nos portos de Liberty City na esperança de enterrar seu passado sombrio e viver o aclamado 'Sonho Americano'." },
                { type: "ascensao", text: "Ele logo descobre que as promessas de luxo de seu primo Roman eram mentiras para esconder dívidas brutais com agiotas da máfia russa, arrastando Niko de volta para a violência." },
                { type: "conflito", text: "Trabalhando como o executor mais letal do submundo nova-iorquino, Niko navega por intrigas políticas e cartéis enquanto busca pelo traidor que vendeu seu antigo esquadrão militar." },
                { type: "dados", text: "📍 Local: Liberty City | 📅 Ano: 2008 | 🎮 Protagonista: Niko Bellic" }
            ]
        },
        characters: [
            { name: "NIKO BELLIC", image: "niko.png", description: "Um ex-soldado cínico e traumatizado. Seus instintos militares o tornam uma máquina de combate perfeita, mas ele vive in conflito moral pelo sangue que derrama." },
            { name: "ROMAN BELLIC", image: "roman.png", description: "O primo ultra-otimista de Niko. Viciado em apostas e dono de uma frota falida de táxis, ele é o coração da história e o principal motivo de Niko se meter em enrascadas." },
            { name: "BRUCIE KIBBUTZ", image: "brucie.png", description: "Um empresário de desmanches focado em esteroides, lifestyle fitness e carros velozes. Egocêntrico ao extremo, ele vê em Niko o 'macho alfa' ideal para resolver seus problemas." }
        ],
        gallery: ["gta4_1.jpg", "gta4_2.jpg", "gta4_3.jpg", "gta4_4.jpg"]
    },

    v: {
        title: "GTA V",
        video: "gta5.mp4",
        image: "",
        transitionVideo: "gta5_logo.mp4",
        buyLink: "#",
        story: { 
            title: "GTA V", 
            image: "gta5H.jpg", 
            content: [
                { type: "intro", text: "Na ensolarada e caótica metrópole de Los Santos, três criminosos de origens e gerações completamente diferentes têm suas vidas cruzadas em uma crisis existencial explosiva." },
                { type: "ascensao", text: "Michael é um ex-assaltante de bancos de elite entediado na proteção a testemunhas; Franklin é um jovem ambicioso das ruas; e Trevor é um psicopata lunático fora de controle." },
                { type: "conflito", text: "Pressionados por agências corruptas do governo e bilionários do setor privado, o trio une forças para planejar e executar os assaltos mais ousados e cinematográficos da história." },
                { type: "dados", text: "📍 Local: Los Santos e Blaine County | 📅 Ano: 2013 | 🎮 Protagonistas: Michael, Franklin e Trevor" }
            ]
        },
        characters: [
            { name: "MICHAEL DE SANTA", image: "michael.png", description: "Mestre nos planos táticos. Vive em uma mansão luxuosa pago pelo FIB, mas sua frustração com a família disfuncional o faz largar a aposentadoria para voltar ao crime." },
            { name: "FRANKLIN CLINTON", image: "franklin.png", description: "Um jovem gângster especializado em pilotagem de fuga. Ele busca deixar os tiroteios de bairro para trás para lucrar de verdade no crime organizado de alto nível." },
            { name: "TREVOR PHILIPS", image: "trevor.png", description: "Um ex-piloto militar totalmente imprevisível e sociopata. Comanda um cartel rural de metanfetamina e armas, agindo puramente por impulso e violência extrema." }
        ],
        gallery: ["gta5_1.jpg", "gta5_2.jpg", "gta5_3.jpg", "gta5_4.jpg"]
    },

    vi: {
        title: "GTA VI",
        video: "gta6.mp4",
        image: "",
        transitionVideo: "gta6_logo.mp4",
        buyLink: "#",
        story: { 
            title: "GTA VI", 
            image: "gta6H.jpg", 
            content: [
                { type: "intro", text: "Inspirado no lendário casal de foras da lei Bonnie e Clyde, GTA VI mergulha no estado moderno de Leonida sob a rotina caótica e perigosa da dupla Lucia e Jason." },
                { type: "ascensao", text: "A narrativa se desenrola em meio ao glamour das praias banhadas a neon de Vice City, o perigo dos pântanos e a cultura bizarra alimentada por redes sociais e vídeos virais." },
                { type: "conflito", text: "Unidos por uma forte tensão romântica e pela ambição financeira, os dois se infiltram em esquemas de alta tecnologia do submundo local, testando os limites da lealdade mútua." },
                { type: "dados", text: "📍 Local: Estado de Leonida / Vice City | 📅 Ano: Atual | 🎮 Protagonistas: Lucia e Jason" }
            ]
        },
        characters: [
            { name: "LUCIA", image: "lucia.png", description: "A primeira protagonista feminina da era moderna. Recém-saída da prisão com tornozeleira eletrônica, ela é astuta, impetuosa e assume a liderança das ações do casal." },
            { name: "JASON", image: "jason.png", description: "Parceiro de crimes e namorado de Lucia. Um rapaz criado nas pistas e estradas da Flórida, leal ao extremo e habilidoso em pilotar qualquer máquina sob pressão policial." },
            { name: "RAUL", image: "raul.png", description: "Um dos contatos mais enigmáticos e perigosos de Vice City. Ele gerencia esquemas de lavagem de dinheiro digital e usa transmissões ao vivo para orquestrar golpes no submundo." }
        ],
        gallery: ["gta6_1.jpg", "gta6_2.jpg", "gta6_3.jpg", "gta6_4.jpg"]
    }
};

/* ========================= */
/* STORY RENDER + ANIMAÇÃO DE ESCREVER (TYPING) */
/* ========================= */
let typingTimeouts = []; 

function typeText(element, text, callback) {
    let index = 0;
    function nextChar() {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
            let timeout = setTimeout(nextChar, 15); 
            typingTimeouts.push(timeout);
        } else if (callback) {
            callback();
        }
    }
    nextChar();
}

function renderStoryContent(content) {
    const container = document.getElementById("storyContent");
    
    typingTimeouts.forEach(clearTimeout);
    typingTimeouts = [];
    container.innerHTML = "";

    if (Array.isArray(content)) {
        let chain = Promise.resolve();

        content.forEach(block => {
            chain = chain.then(() => {
                return new Promise(resolve => {
                    const p = document.createElement("p");
                    container.appendChild(p);

                    let prefix = "";
                    if (block.type === "intro") prefix = "<strong>Introdução:</strong> ";
                    else if (block.type === "ascensao") prefix = "<strong>Ascensão:</strong> ";
                    else if (block.type === "conflito") prefix = "<strong>Conflito:</strong> ";
                    
                    if (block.type === "dados") {
                        p.className = "icon";
                        p.style.color = "#f4c430";
                        typeText(p, block.text, resolve);
                    } else {
                        p.innerHTML = prefix; 
                        typeText(p, block.text, resolve); 
                    }
                });
            });
        });
    }
}

/* ==========================================================================
   TROCAR JOGO COM TRANSIÇÃO EM VÍDEO COMPLETA (OTIMIZAÇÃO DE SINCRONIA)
   ========================================================================== */
function changeGame(gameKey) {
    const game = games[gameKey];
    if (!game) return;

    currentGame = gameKey;

    const transitionContainer = document.getElementById("pageTransition");
    const transitionVideo = document.getElementById("transitionVideo");

    transitionVideo.onplaying = null;
    transitionVideo.onended = null;

    transitionVideo.src = game.transitionVideo;
    transitionVideo.load();
    
    transitionVideo.onplaying = () => {
        transitionContainer.classList.add("active");
    };

    transitionVideo.play().catch(err => {
        console.log("Aguardando interação inicial para reproduzir vídeo:", err);
        transitionContainer.classList.add("active");
        setTimeout(updatePageContent, 500);
    });

    transitionVideo.onended = () => {
        updatePageContent();
        transitionContainer.classList.remove("active");
    };

    function updatePageContent() {
        document.getElementById("gameTitle").textContent = game.title;

        const video = document.getElementById("heroVideo");
        const heroImage = document.getElementById("heroImage");

        if (game.video && game.video.endsWith(".mp4")) {
            video.src = game.video;
            video.style.display = "block";
            video.load();
            heroImage.style.display = "none";
        } else if (game.image) {
            heroImage.src = game.image;
            heroImage.style.display = "block";
            video.style.display = "none";
        } else {
            video.style.display = "none";
            heroImage.style.display = "none";
        }

        if (document.getElementById("buyBtnHero")) document.getElementById("buyBtnHero").href = game.buyLink;
        document.getElementById("buyBtn").href = game.buyLink;
        
        document.getElementById("storyCardImg").src = game.story.image;

        game.characters.forEach((char, index) => {
            const imgElement = document.getElementById(`char${index + 1}Img`);
            const nameElement = document.getElementById(`char${index + 1}Name`);
            if (imgElement) imgElement.src = char.image;
            if (nameElement) nameElement.textContent = char.name;
        });

        game.gallery.forEach((img, index) => {
            const galleryElement = document.getElementById(`gallery${index + 1}`);
            if (galleryElement) galleryElement.src = img;
        });
    }
}

/* ========================= */
/* MODAL HISTÓRIA */
/* ========================= */
const storyModal = document.getElementById("storyModal");
function openStory() {
    const game = games[currentGame];
    document.getElementById("storyImg").src = game.story.image;
    document.getElementById("storyTitle").textContent = game.story.title;
    renderStoryContent(game.story.content);
    storyModal.classList.add("active");
}
function closeStory() { 
    typingTimeouts.forEach(clearTimeout); 
    storyModal.classList.remove("active"); 
}
document.getElementById("storyCard").addEventListener("click", openStory);

/* ========================= */
/* MODAL PERSONAGEM */
/* ========================= */
const characterModal = document.getElementById("characterModal");
function openCharacter(index) {
    const character = games[currentGame].characters[index];
    document.getElementById("characterModalImg").src = character.image;
    document.getElementById("characterModalName").textContent = character.name;
    document.getElementById("characterModalDesc").textContent = character.description || "Nenhuma descrição disponível.";
    characterModal.classList.add("active");
}
function closeCharacter() { characterModal.classList.remove("active"); }
document.querySelectorAll(".character-card").forEach((card, index) => {
    card.addEventListener("click", () => openCharacter(index));
});

/* ========================= */
/* GALERIA */
/* ========================= */
const viewer = document.getElementById("imageViewer");
const viewerImg = document.getElementById("viewerImg");

document.querySelectorAll(".gallery img").forEach((img, index) => {
    img.addEventListener("click", () => {
        const game = games[currentGame];
        const itemPath = game.gallery[index];
        if (itemPath) {
            viewer.classList.add("active");
            viewerImg.src = itemPath;
            viewerImg.alt = "Imagem da Galeria " + (index + 1);
        }
    });
});

function closeViewer() { viewer.classList.remove("active"); }
viewer.addEventListener("click", (e) => { if (e.target === viewer) closeViewer(); });

/* ========================= */
/* INICIAR DO JEITO CERTO DIRECT (SEM LOGO NO LOAD) */
/* ========================= */
window.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        const game = games["gta3"];
        document.getElementById("gameTitle").textContent = game.title;

        const video = document.getElementById("heroVideo");
        if (video) { video.src = game.video; video.load(); }
        
        if (document.getElementById("buyBtnHero")) document.getElementById("buyBtnHero").href = game.buyLink;
        document.getElementById("buyBtn").href = game.buyLink;
        document.getElementById("storyCardImg").src = game.story.image;
        
        game.characters.forEach((char, index) => {
            const imgElement = document.getElementById(`char${index + 1}Img`);
            const nameElement = document.getElementById(`char${index + 1}Name`);
            if (imgElement) imgElement.src = char.image;
            if (nameElement) nameElement.textContent = char.name;
        });

        game.gallery.forEach((img, index) => {
            const galleryElement = document.getElementById(`gallery${index + 1}`);
            if (galleryElement) galleryElement.src = img;
        });
    }, 100);
});