import fetch from 'node-fetch';

const s = '<!doctypehtml><meta charset=UTF-8><meta name="viewport" content="width=device-width"><title>ImportDoc Viewer</title><style>#__importdoc{max-width:550px;padding:10px;margin:auto;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"}</style>';

module.exports = (req, res) => {
	const { query: { id } } = req;
	res.setHeader('Content-Type', 'text/html');
	res.write(s);
	fetch(`https://api.importdoc.com/document?id=${id}`).then(x => x.body.pipe(res));
}
