/**
 * Offline
 *
 * Shows a testing component with site info
 *
 * @author Chris Nasr <chris@ouroboroscoding.com>
 * @copyright Ouroboros Coding Inc.
 * @created 2024-09-19
 */
import PropTypes from 'prop-types';
import React from 'react';
export type OfflinePositionType = 'bottom' | 'top';
export type OfflineProps = {
    message: string;
    position: OfflinePositionType;
};
/**
 * Offline
 *
 * @name Offline
 * @access public
 * @param Object props Properties passed to the component
 * @returns React.Component
 */
declare function Offline({ message, position }: OfflineProps): React.JSX.Element | null;
declare namespace Offline {
    var propTypes: {
        message: PropTypes.Requireable<string>;
        position: PropTypes.Requireable<string>;
    };
    var defaultProps: {
        message: string;
        position: string;
    };
}
export default Offline;
