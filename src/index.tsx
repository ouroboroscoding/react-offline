/**
 * Offline
 *
 * Shows a testing component with site info
 *
 * @author Chris Nasr <chris@ouroboroscoding.com>
 * @copyright Ouroboros Coding Inc.
 * @created 2024-09-19
 */

// Ouroboros modules
import { useOnline } from '@ouroboros/react-hooks';

// NPM modules
import PropTypes from 'prop-types';
import React from 'react';

// Types
export type OfflinePositionType = 'bottom' | 'top';
export type OfflineProps = {
	message: string,
	position: OfflinePositionType
}

/**
 * Offline
 *
 * @name Offline
 * @access public
 * @param Object props Properties passed to the component
 * @returns React.Component
 */
export default function Offline({
	message = 'You are not online! Please check your network connection.',
	position = 'top'
}: OfflineProps) {

	// Hooks
	const online = useOnline();

	// If online, do nothing
	if(online) return null;

	// If we're on the bottom
	const oStyle = (position === 'bottom') ? { bottom: '0' } : { top: '0' }

	// If we're offline
	return (
		<div id="oc_offline" style={oStyle}>
			<p>{message}</p>
		</div>
	)
}

// Valid props
Offline.propTypes = {
	message: PropTypes.string,
	position: PropTypes.oneOf([ 'bottom', 'top' ])
}