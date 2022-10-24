$(document).ready(function () {
	$.getJSON("./tarefas.json", function (tarefas) {
		let atividadesAeds = tarefas.AEDs1;
		let atividadesDIW = tarefas.DIW;

		let list = document.getElementById("AEDs1");
		let list1 = document.getElementById("DIW");

		for (let item in atividadesAeds) {
			let listItem = document.createElement("li");
			let container = document.createElement("div");
			let titulo = document.createElement("a");
			let progressBar = document.createElement("progress");
			let exclamationMark = document.createElement("img");

			exclamationMark.setAttribute("id", item);

			exclamationMark.setAttribute("src", "exclamationmark.png");
			exclamationMark.setAttribute("style", "width: 25px");
			// exclamationMark.setAttribute("id", "imgAeds");

			progressBar.setAttribute("id", "file");
			progressBar.setAttribute("value", atividadesAeds[item].numeroQuestoesFeitas);
			progressBar.setAttribute("max", atividadesAeds[item].numeroMaximoQuestoes);

			titulo.innerHTML = atividadesAeds[item].nome;

			// console.log(atividadesAeds[item]);

			container.classList.add("tarefaContainer");
			container.appendChild(titulo);
			container.appendChild(progressBar);
			container.appendChild(exclamationMark);

			listItem.appendChild(container);
			list.appendChild(listItem);
		}

		for (let item in atividadesDIW) {
			let listItem = document.createElement("li");
			let container = document.createElement("div");
			let titulo = document.createElement("a");
			let aId = document.createElement("a");
			// aId.setAttribute("class", "classDiw");
			let exclamationMark = document.createElement("img");

			exclamationMark.setAttribute("id", item);

			exclamationMark.setAttribute("src", "exclamationmark.png");
			exclamationMark.setAttribute("style", "width: 25px");
			aId.appendChild(exclamationMark);

			titulo.innerHTML = atividadesDIW[item].nome;

			// console.log(atividadesAeds[item]);

			container.classList.add("tarefaContainer");
			container.appendChild(titulo);
			container.appendChild(aId);

			listItem.appendChild(container);
			list1.appendChild(listItem);
		}

		$("img").click(function (event) {
			// let id = this.id;
			// console.log("Id: ", id);
			let item = event.target.id;
			// console.log(evento);
			// console.log(tarefas);
			$("#1").text("Prazo de entrega: " + tarefas.AEDs1[item].prazo);
			$("#2").text("Prioridade: " + tarefas.AEDs1[item].prioridade);
			$("#3").text("Número total de questões: " + tarefas.AEDs1[item].numeroMaximoQuestoes);
			$("#4").text("Número de questões feitas: " + tarefas.AEDs1[item].numeroQuestoesFeitas);
		});

		$("a").click(function (event) {
			let item = event.target.id;
			console.log(event);
			// console.log(tarefas);
			$("#1").text("Prazo de entrega: " + tarefas.DIW[item].prazo);
			$("#2").text("Prioridade: " + tarefas.DIW[item].prioridade);
		});

		// atividades.forEach((element) => {
		// 	let listItem = document.createElement("li");
		// 	list.appendChild(listItem);
		// 	// console.log(element);
		// });
	});
});
