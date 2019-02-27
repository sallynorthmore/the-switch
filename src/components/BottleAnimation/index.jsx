import React from 'react';
import PropTypes from 'prop-types';
import { Spring, animated } from 'react-spring';
import { interpolate } from 'flubber';

import styles from './styles.module.css';

const BOTTLE =
	'M7.90664291,6.44393862 C7.77488585,5.61181586 7.06252977,4.70046036 6.4902037,3.96823529 C6.19020719,3.58439898 5.90682441,3.22189258 5.83670769,3.02199488 C5.70556093,2.64838875 5.65653347,2.24071611 5.63815665,1.99140665 C5.76130169,1.95309463 5.84796434,1.86163683 5.84796434,1.75488491 L5.84796434,0.699079284 C5.84796434,0.313606138 5.4322142,0 4.92125722,0 L3.07869277,0 C2.56773579,0 2.15198566,0.313606138 2.15205347,0.699079284 L2.15205347,1.75493606 C2.15205347,1.86173913 2.23885173,1.95319693 2.36206459,1.99150895 C2.34375558,2.24040921 2.29479593,2.64731458 2.16337793,3.02204604 C2.09319339,3.22194373 1.80981062,3.58445013 1.50981411,3.96828645 C0.937420228,4.70051151 0.225064143,5.61181586 0.0933748981,6.44398977 C-0.0252267956,7.19299233 -0.00318817331,8.78409207 0.0128152571,9.9459335 C0.018850449,10.383734 0.0240719072,10.7618926 0.0208847834,11.0154476 C0.0178332818,11.2634783 0.0760152448,11.5072123 0.193667582,11.7396931 C0.406255524,12.1596931 0.900666587,13.2341176 0.900666587,14.1364194 C0.900666587,14.8090537 0.699538729,15.582711 0.522076961,16.2653197 C0.369705316,16.8514066 0.238151694,17.3575448 0.238151694,17.745422 C0.238151694,18.5868031 0.489731044,19.1743734 1.00733352,19.5418414 C1.50472827,19.8948338 2.26258564,19.8706394 2.75631859,19.6988235 C2.84318466,19.6685934 2.9164207,19.6421483 2.97731511,19.6195908 C3.16569447,19.7612788 3.4767442,19.9451151 3.86455614,19.9895141 C3.90802308,19.9989258 3.95379561,20.0013299 3.99977156,19.9989258 C4.01190976,19.9995908 4.02411577,20 4.03679645,20 C4.07043078,20 4.10352262,19.9964706 4.13546167,19.9894629 C4.52618949,19.944757 4.84863149,19.7582097 5.04270698,19.6173913 C5.10475418,19.6404604 5.17982112,19.6675703 5.26939964,19.6987724 C5.64358155,19.8291049 6.42788526,19.9426087 6.99268429,19.5417903 C7.51028676,19.1743734 7.76186611,18.5867519 7.76186611,17.7453708 C7.76186611,17.3574936 7.63024468,16.8513555 7.47794085,16.2652685 C7.30047908,15.5826598 7.09935122,14.8090026 7.09935122,14.1363683 C7.09935122,13.2341176 7.59376228,12.1596931 7.80635022,11.7396419 C7.92400256,11.5071611 7.98218452,11.2634783 7.97913302,11.0153453 C7.9759459,10.7618414 7.98116736,10.383734 7.98720255,9.94588235 C8.00320598,8.78404092 8.02517679,7.19294118 7.90664291,6.44393862 Z';
const LETTER =
	'M1.140625,9.6875 C1.20833367,8.97395477 1.27604133,8.26823266 1.34375,7.5703125 C1.41145867,6.87239234 1.47135391,6.15625367 1.5234375,5.421875 C1.53385422,5.24999914 1.55078113,5.13151074 1.57421875,5.06640625 C1.59765637,5.00130176 1.65624953,4.95833344 1.75,4.9375 C2.19271055,4.84895789 2.65624758,4.7565109 3.140625,4.66015625 C3.62500242,4.5638016 4.09374773,4.44010492 4.546875,4.2890625 C4.56250008,4.28385414 4.58593734,4.28125 4.6171875,4.28125 C4.67447945,4.28125 4.703125,4.30208313 4.703125,4.34375 L4,11.953125 C3.98437492,12.1250009 3.96614594,12.2434893 3.9453125,12.3085938 C3.92447906,12.3736982 3.86718797,12.4166666 3.7734375,12.4375 C3.33072695,12.5729173 2.88281477,12.7239575 2.4296875,12.890625 C1.97656023,13.0572925 1.49739836,13.2265616 0.9921875,13.3984375 C0.976562422,13.4036459 0.953125156,13.40625 0.921875,13.40625 C0.864583047,13.40625 0.8359375,13.3802086 0.8359375,13.328125 C0.8359375,13.3229166 0.841145781,13.2526048 0.8515625,13.1171875 C0.861979219,12.9817702 0.876301992,12.8072927 0.89453125,12.59375 C0.912760508,12.3802073 0.932291562,12.1406263 0.953125,11.875 C0.973958438,11.6093737 0.996093633,11.3437513 1.01953125,11.078125 C1.04296887,10.8124987 1.06510406,10.5572929 1.0859375,10.3125 C1.10677094,10.0677071 1.12499992,9.85937586 1.140625,9.6875 Z M1.7265625,3.453125 C1.74218758,3.22916555 1.75390621,3.05729227 1.76171875,2.9375 C1.76953129,2.81770773 1.77604164,2.72786488 1.78125,2.66796875 C1.78645836,2.60807262 1.7890625,2.57031258 1.7890625,2.5546875 C1.7890625,2.53906242 1.79036457,2.52734379 1.79296875,2.51953125 C1.79557293,2.51171871 1.79817707,2.49609387 1.80078125,2.47265625 C1.80338543,2.44921863 1.80729164,2.39973996 1.8125,2.32421875 C1.81770836,2.24869754 1.82552078,2.13802156 1.8359375,1.9921875 C1.84635422,1.84635344 1.86197906,1.64583461 1.8828125,1.390625 C1.89322922,1.21874914 1.91015613,1.10026074 1.93359375,1.03515625 C1.95703137,0.970051758 2.01562453,0.927083438 2.109375,0.90625 C2.55208555,0.817707891 3.01562258,0.725260898 3.5,0.62890625 C3.98437742,0.532551602 4.45312273,0.408854922 4.90625,0.2578125 C4.92187508,0.252604141 4.94531234,0.25 4.9765625,0.25 C4.99218758,0.281250156 5.0130207,0.302083281 5.0390625,0.3125 L5.0625,0.328125 L4.890625,2.46875 C4.87499992,2.64062586 4.85546887,2.76041633 4.83203125,2.828125 C4.80859363,2.89583367 4.75260461,2.93749992 4.6640625,2.953125 C4.22135195,3.03645875 3.77343977,3.12760367 3.3203125,3.2265625 C2.86718523,3.32552133 2.38802336,3.42447867 1.8828125,3.5234375 C1.86718742,3.52864586 1.84375016,3.53125 1.8125,3.53125 C1.75520805,3.53125 1.7265625,3.50520859 1.7265625,3.453125 Z';

const TREE =
	'M3.20281284 6.55539621 6.99001049 0 10.877238 6.55539621 9.17177576 6.10552182 11.9032406 11.2152279 10.0082482 10.2504583 13.8725586 17.1538042 7.76919025 16.0042228 7.76919025 20.9853516 6.12071097 20.9853516 6.12071097 16.0042228 0 17.1538042 3.85811664 10.4926758 2.13097613 11.2152279 5.00025295 6.10552182z';

class BottleAnimation extends React.Component {
	state = {
		paths: [BOTTLE, TREE],
	};

	render() {
		const { paths } = this.state;
		const interpolator = interpolate(paths[0], paths[1], {
			maxSegmentLength: 0.1,
		});
		return (
			<div className={styles.BottleAnimation}>
				<Spring
					reset
					native
					delay="2000"
					from={{ t: 0, x: 15 }}
					to={{ t: 1, x: 0 }}
				>
					{({ t, x }) => (
						<animated.svg
							width="20px"
							height="25px"
							style={{
								transform: x.interpolate(x => `translate3d(${x}%, 0,0)`),
							}}
							viewBox="0 0 20 25"
						>
							<g fill="currentColor">
								<animated.path d={t.interpolate(interpolator)} />
							</g>
						</animated.svg>
					)}
				</Spring>
			</div>
		);
	}
}

BottleAnimation.propTypes = {};

BottleAnimation.defaultProps = {};

export default BottleAnimation;
