// generate h js code from html

/*

	<span>hello</span>
	<div>
		<a href="#">test</a>
	</div>

	>>>

	h.add(new HTML("span", {}, `hello`));
	h.addOpen(new HTML("div", {}));
		h.add(new HTML("a", {href: "#"}, `test`));
	h.close();

*/

var htmlToHJS = (html) => {
	var fragment = parseHTML(html);

	console.dir(fragment);

	return addNodeChildren(fragment);
}

var parseHTML = (html) => {
	var t = document.createElement('template');
	t.innerHTML = html;
	return t.content.cloneNode(true);
}

var addNodeChildren = (node, ident=``) => {

	console.dir(Array.from(node.children));

	var str = ``;

	Array.from(node.children).forEach(child => {

		console.dir(child);
		var children = Array.from(child.children);
		console.dir(children);

		if (children.length == 0) {
			str += ident + jsAddHTML(child.tagName, Array.from(child.attributes), child.textContent);
		} else {
			str += ident + jsAddOpenHTML(child.tagName, Array.from(child.attributes));
			str += addNodeChildren(child, ident + `\t`);
			str += ident + jsClose();
			str += `\n`;
		}

	});

	return str;

}

var jsFunctionHTML = (functionName, tag, attr, content) => {
	var str = `h.` + functionName + `(new HTML("`+ tag.toLowerCase() +`"`
	if ((attr && attr.length > 0) || content) {

		str += `, {`;

		attr.forEach((a, i) => {
			if (i != 0) {
				str += `, `
			}
			str += a.name + `: `;
			if (typeof a.value == 'number') {
				str += a.value;
			} else {
				str += `"` + a.value + `"`;
			}
		});

		str += `}`;

	}
	if (content) {
		str += `, "`+ content +`"`;
	}
	
	str += `));\n`;
	return str;
}

var jsAddHTML = (tag, attr, content) => {
	return jsFunctionHTML("add", tag, attr, content);
}

var jsAddOpenHTML = (tag, attr, content) => {
	return jsFunctionHTML("addOpen", tag, attr, content);
}

var jsClose = () => {
	return `h.close();\n`;
}