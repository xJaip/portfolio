import workExperience from "./workExperience.js"
import habilitiesTech from "./habilitiesTech.js"
import professionalDescription from "./professionalDescription.js"
import education from "./education.js"
import personalDescription from "./personalDescription.js"


export default function about() {
    return `
     <div class="container mt-5">
        <ul class="nav nav-tabs justify-content-center" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
                <a class="nav-link active" id="experiencia-laboral-tab" data-bs-toggle="tab" href="#experiencia-laboral" role="tab" aria-controls="experiencia-laboral" aria-selected="true">Experiencia Laboral</a>
            </li>
            <li class="nav-item" role="presentation">
                <a class="nav-link" id="habilities-tech-tab" data-bs-toggle="tab" href="#habilities-tech" role="tab" aria-controls="habilities-tech" aria-selected="false">Habilidades y Tecnologías</a>
            </li>
            <li class="nav-item" role="presentation">
                <a class="nav-link" id="proffesional-description-tab" data-bs-toggle="tab" href="#proffesional-description" role="tab" aria-controls="proffesional-description" aria-selected="false">Descripción Profesional</a>
            </li>
            <li class="nav-item" role="presentation">
                <a class="nav-link" id="education-tab" data-bs-toggle="tab" href="#education" role="tab" aria-controls="education" aria-selected="false">Educación</a>
            </li>
            <li class="nav-item" role="presentation">
                <a class="nav-link" id="personal-description-tab" data-bs-toggle="tab" href="#personal-description" role="tab" aria-controls="personal-description" aria-selected="false">Descripción Personal</a>
            </li>
        </ul>
        <div class="tab-content" id="myTabContent">
            
            <div class="tab-pane fade show active fs-5" id="experiencia-laboral" role="tabpanel" aria-labelledby="experiencia-laboral-tab">
                ${workExperience()}
            </div>
            <div class="tab-pane fade fs-5" id="habilities-tech" role="tabpanel" aria-labelledby="habilities-tech-tab">
                ${habilitiesTech()}
            </div>
            <div class="tab-pane fade fs-5" id="proffesional-description" role="tabpanel" aria-labelledby="professional-description-tab">
                ${professionalDescription()}
            </div>
            <div class="tab-pane fade fs-5" id="education" role="tabpanel" aria-labelledby="education-tab">
                ${education()}
            </div>
            <div class="tab-pane fade fs-5" id="personal-description" role="tabpanel" aria-labelledby="personal-description-tab">
                ${personalDescription()}
            </div>
        </div>
    </div>
`
}