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
/**
 * Offline
 *
 * @name Offline
 * @access public
 * @param Object props Properties passed to the component
 * @returns React.Component
 */
export default function Offline({ message, position }) {
    // Hooks
    const online = useOnline();
    // If online, do nothing
    if (online)
        return null;
    // If we're on the bottom
    const oStyle = (position === 'bottom') ? { bottom: '0' } : { top: '0' };
    // If we're offline
    return (React.createElement("div", { id: "oc_offline", style: oStyle },
        React.createElement("p", null, message)));
}
// Valid props
Offline.propTypes = {
    message: PropTypes.string,
    position: PropTypes.oneOf(['bottom', 'top'])
};
// Default props
Offline.defaultProps = {
    message: 'You are not online! Please check your network connection.',
    position: 'top'
};
