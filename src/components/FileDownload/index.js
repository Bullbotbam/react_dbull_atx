import React from 'react';
import Button from '@material-ui/core/Button';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';

const FileDownload = () => {
	const downloadFile = () => {
		const newWindow = window.open(
			'https://docs.google.com/document/d/1Mo2_v1GARc66JF_9e56pqaQ--3O8rO7x4dgZxLf7Nhg/edit?usp=sharing',
			'_blank',
			'noopener,noreferrer'
		);
		if (newWindow) newWindow.opener = null;
	};

	return (
		<Button
			onClick={downloadFile}
			variant="contained"
			target="_blank"
			color="default"
			startIcon={<CloudDownloadIcon />}
		>
			Resume
		</Button>
	);
};

export default FileDownload;
