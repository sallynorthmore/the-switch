const openPopup = (url = 'about:blank', width = 600, height = 420) => {
	const position = {
		top: window.innerHeight / 2 - height / 2,
		left: window.innerWidth / 2 - width / 2,
	};

	let options = `status=1,width=${width},height=${height},`;
	options += `top=${position.top},left=${position.left}`;

	window.open(url, '', options);
};

export const shareToTwitter = (text, shareUrl) => {
	let url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
	if (!shareUrl) {
		shareUrl = window.location.href;
	}

	url += `&url=${encodeURIComponent(`${shareUrl}`)}`;

	openPopup(url);
};

export const shareToLinkedIn = (text, shareUrl) => {
	if (!shareUrl) {
		shareUrl = window.location.href;
	}
	const encoded = encodeURIComponent(text);

	let url = `https://www.linkedin.com/shareArticle?summary=${encoded}`;
	url += `&url=${encodeURIComponent(`${shareUrl}`)}`;

	openPopup(url, 650, 550);
};
