# @ouroboros/react-offline

[![npm version](https://img.shields.io/npm/v/@ouroboros/react-offline.svg)](https://www.npmjs.com/package/@ouroboros/react-offline) ![MIT License](https://img.shields.io/npm/l/@ouroboros/react-offline.svg)

A React component that displays a message when the user is offline.

## Installation
npm
```bash
npm install @ouroboros/react-offline
```

## Using
```javascript
import Offline from '@ouroboros/react-offline';

function App(props) {

	return (
		<Offline />
	);
}
```

![Example image of component in use](example.png)

## Props

| Name | Type | Required | Description |
|--|--|--|--|
| message | string | no | Default, "You are not online! Please check your network connection." |
| position | "bottom" \| "top" | no | Default, "top" |

## Style

You can set your own styles using the #oc_offline ID, or import / include `node_modules/@ouroboros/react-offline/style.css`.