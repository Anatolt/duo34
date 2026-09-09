const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function promptMarkup(en,ru,id,tag='h2'){
 return `<div class="question-prompt"><${tag} tabindex="-1" lang="en">${esc(en)}</${tag}><details class="translation" data-translation-id="${esc(id)}"><summary>Перевод</summary><p lang="ru">${esc(ru)}</p></details></div>`;
}
export function choiceCard({id,en,ru,index,action,attribute,value,answered,selected=false,good=false,bad=false}){
 return `<div class="answer-card ${selected?'selected':''} ${good?'good':''} ${bad?'bad':''}"><button class="answer" data-action="${action}" data-${attribute}="${value}" ${answered?'disabled':''} aria-pressed="${selected}"><span class="key" aria-hidden="true">${index+1}</span><span lang="en">${esc(en)}</span></button><button class="choice-translate" data-action="translation-toggle" aria-expanded="false" aria-controls="${esc(id)}">Перевод<span class="sr-only"> варианта ${index+1}</span></button><p class="choice-translation" id="${esc(id)}" lang="ru" hidden>${esc(ru)}</p></div>`;
}
