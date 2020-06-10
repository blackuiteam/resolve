import React, { PureComponent } from "react";
import styles from './styles';
import { StickyContainer, Sticky } from 'react-sticky';

const containerBg = i => `hsl(${i * 40}, 70%, 90%)`;
const headerBg = i => `hsl(${i * 40}, 70%, 50%)`;

class Header extends React.Component {
	static defaultProps = {
		className: ""
	};

	render() {

	const { style, renderCount, className } = this.props;

	return (
		<div className={"header " + className} style={style}>
			<h2>
				<span className="pull-left">
					{"<Sticky /> "}
					{renderCount ? <small>(invocation: #{renderCount})</small> : null}
				</span>
			</h2>
		</div>
		);
	}
}


export default class Stacked extends PureComponent {
  render() {
    return (
      <>
		<style>{styles}</style>
		<div>
        {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
          <StickyContainer
            key={i}
            className="container"
            style={{ background: containerBg(i) }}
          >
            <Sticky>
              {({ style }) => (
                <Header style={{ ...style, background: headerBg(i) }} />
              )}
            </Sticky>

            <h2 className="text-center">{`<StickyContainer #${i} />`}</h2>
          </StickyContainer>
        ))}
		</div>
      </>
    );
  }
}
