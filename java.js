const hamburger = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const mobilelistlink = document.querySelectorAll('#mobilelist li a');
const cancelBtn = document.querySelector('#cancel-btn');

const toggleMobileMenu = () => {
  hamburger.classList.toggle('hide');
  cancelBtn.classList.toggle('hide');
  mobileMenu.style.display = mobileMenu.style.display === 'flex' ? 'none' : 'flex';
};
const hideMobileMenu = () => {
  hamburger.classList.remove('hide');
  cancelBtn.classList.add('hide');
  mobileMenu.style.display = 'none';
};
hamburger.addEventListener('click', toggleMobileMenu);
mobilelistlink.forEach((a) => {
  a.addEventListener('click', hideMobileMenu);
});

cancelBtn.addEventListener('click', hideMobileMenu);

const projectDetails = [
  {
    name: "Project 1",
    description: "Lorem ipsum dolor sit amet",
    image: "images/popupmobile.png",
    technologies: ['Ruby on rails', 'HTML', 'CSS', 'JavaScript'],
    'live version': "https://yashodhicy.github.io/",
    source: "https://github.com/yashodhicy/MyPortofolio",
  },
  {
    name: "Project 2",
    description: "Lorem ipsum dolor sit amet",
    image: "images/popupmobile.png",
    technologies: ['Ruby on rails', 'HTML', 'CSS', 'JavaScript'],
    'live version': "https://yashodhicy.github.io/",
    source: "https://github.com/yashodhicy/MyPortofolio",
  },
  {
    name: "Project 3",
    description: "Lorem ipsum dolor sit amet",
    image: "images/popupmobile.png",
    technologies: ['Ruby on rails', 'HTML', 'CSS', 'JavaScript'],
    live: "https://yashodhicy.github.io/",
    source: "https://github.com/yashodhicy/MyPortofolio",
  },
]

const projectContainer = document.getElementById("projects");

// const fragment = new DocumentFragment();

projectDetails.forEach((project) => {
  const projectDiv = document.createElement('div');
  projectDiv.classList.add("project");
  projectDiv.classList.add('work-card');

  const titleEl = document.createElement("h3");
  titleEl.innerText = project.name;
  projectDiv.appendChild(titleEl);
  // titleEl.classList.add('');

  const descriptionEl = document.createElement("p");
  descriptionEl.innerText = project.description;
  projectDiv.appendChild(descriptionEl);

  const imageEl = document.createElement("img");
  imageEl.src = project.image;
  projectDiv.appendChild(imageEl);

  const technologiesEl = document.createElement("ul");
  project.technologies.forEach((technology) => {
    const technologyEl = document.createElement("li");
    technologyEl.innerText = technology;
    technologiesEl.appendChild(technologyEl);
  });
  projectDiv.appendChild(technologiesEl);

  const liveDemo = document.createElement("a");
  liveDemo.href = project.live;
  projectDiv.appendChild(liveDemo);

  const sourceEl = document.createElement("a");
  sourceEl.href = project.source;
  projectDiv.appendChild(sourceEl);
  
  projectContainer.appendChild(projectDiv);
});

const preview = document.querySelector('.see_project');

const popup = document.querySelector('#popup')

const projectdetails = () => {
    
    popup.classList.toggle('hide');

    const popupImage = document.querySelector('#popup-image');
    const popupTitle = document.querySelector('#popup-title');
    const popupTechs = document.querySelector('#popup-techs');
    const popupDescription = document.querySelector('#popup-description');
    popupTechs.textContent='';

    popupImage.src = projectDetails[0].image;
    popupTitle.textContent = projectDetails[0].name;

    projectDetails[0].technologies.forEach((tech) => {
        const techList = document.createElement('li');
        techList.textContent = tech;
        popupTechs.appendChild(techList);
    });
    
    popupDescription.textContent = projectDetails[0].description;
};

preview.addEventListener('click', projectdetails);



