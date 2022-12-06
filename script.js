
const _exams = [ciencias, exatas, humanas, linguagens];
const _queryString = window.location.search;
const _urlParams = new URLSearchParams(_queryString);
const _area = Number(_urlParams.get("area")) ?? 0;

const prova = _exams[_area];

const $ = el => document.createElement(el);

function _text({ conteudo }) {
    const p = $("p");
    p.textContent = conteudo;
    return p;
}

function _image({ caminho_da_imagem, texto_alternativo }) {
    const img = $("img");
    img.setAttribute("src", caminho_da_imagem);
    img.setAttribute("alt", texto_alternativo);
    img.setAttribute("title", texto_alternativo);
    img.style.maxWidth = "500px";
    img.style.height = "auto";
    return img;
}

const _makers = { "texto": _text, "imagem": _image };

const _ = ({ tipo, ...object }) => _makers[tipo](object);

function _question({ id, enunciados, alternativas, ...question }, index) {
    const questionId = id;
    var fieldset = $("fieldset");
    fieldset.style.display = "flex";
    fieldset.style.flexDirection = "column";
    var legend = $("legend");
    legend.textContent = `Questão ${index + 1}`;

    fieldset.appendChild(legend);

    var statementElements = [];
    var alternativeElements = [];

    for (let statement of enunciados) {
        const statementElement = _(statement);
        statementElements.push(statementElement);
        fieldset.appendChild(statementElement);
    }

    for (let { id, ...alternative } of alternativas) {
        const alternativeElement = _(alternative);
        alternativeElement.style.display = "inline";

        let input = $("input");
        input.setAttribute("type", "radio");
        input.setAttribute("id", id);
        input.setAttribute("name", questionId);
        input.setAttribute("value", id);

        var label = $("label");
        label.appendChild(input);
        label.appendChild(alternativeElement);

        alternativeElements.push({ id: id, label: label, input: input});
        fieldset.appendChild(label);
    }

    return { id: id, questao: fieldset, enunciados: statementElements, alternativas: alternativeElements }
}

var exam = [];

function _exam({ questoes }) {
    var form = $("form");
    form.onsubmit = (event) => { event.preventDefault(); _onInputSubmit() };

    const input = $("input");
    input.setAttribute("type", "submit");
    input.setAttribute("value", "ENVIAR");

    questoes.forEach((question, i) => {
        const questionObject = _question(question, i);
        const questionElement = questionObject.questao;
        exam.push(questionObject);
        form.appendChild(questionElement);
    });

    form.appendChild(input);
    return form
}

function _init() {
    const title = $("h2");
    title.textContent = prova.area;
    document.body.appendChild(title);
    document.body.appendChild(_exam(prova));
}

function _onInputSubmit() {
    for (let i = 0; i < exam.length; i++) {
        let correctAlternativeId = prova.questoes[i].alternativa_correta;
        let alternativeObjects = exam[i].alternativas;
        for (let alternativeObject of alternativeObjects) {
            if (alternativeObject.id == correctAlternativeId) {
                alternativeObject.label.style.backgroundColor = "green";
            }
            if (alternativeObject.input.checked && alternativeObject.id != correctAlternativeId) {
                alternativeObject.label.style.backgroundColor = "red";
            }
        }
    }
}