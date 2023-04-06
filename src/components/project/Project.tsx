import { ReactNode } from 'react';
import Babel from '../../assets/Babel';
import CSS from '../../assets/CSS';
import ESLint from '../../assets/ESLint';
import Firebase from '../../assets/Firebase';
import HTML from '../../assets/HTML';
import JavaScript from '../../assets/JavaScript';
import Jest from '../../assets/Jest';
import NodeJS from '../../assets/NodeJS';
import React from '../../assets/React';
import Redux from '../../assets/Redux';
import Sass from '../../assets/Sass';
import TypeScript from '../../assets/TypeScript';
import Webpack from '../../assets/Webpack';
import { IProject } from '../../data/projects';
import Carousel from '../carousel/Carousel';
import DevIcon from '../dev_icon/DevIcon';
import './Project.scss';

type TProps = {
  data: IProject;
  number: number;
};

function Project({ data, number }: TProps) {
  const paddedNumber = String(number + 1).padStart(2, '0');

  return (
    <article className='project'>
      <div className='project__header'>
        <div className='project__header-text'>
          {data.links ? (
            <>
              <h3 className='project__title' data-project-number={paddedNumber}>
                <a href={data.links.live}>{data.title}</a>
              </h3>

              <div className='project__links'>
                <a href={data.links.live}>LIVE</a> | <a href={data.links.repo}>CODE</a>
              </div>
            </>
          ) : (
            <h3 className='project__title' data-project-number={paddedNumber}>
              {data.title}
            </h3>
          )}
        </div>

        <div className='project__dev-icons'>
          {data.techIcons.map((tech) => {
            let techComponent: ReactNode | null = null;
            let tooltip = '';

            switch (tech) {
              case 'react':
                techComponent = <React />;
                tooltip = 'React';
                break;
              case 'redux':
                techComponent = <Redux />;
                tooltip = 'Redux Tool Kit';
                break;
              case 'css':
                techComponent = <CSS />;
                tooltip = 'CSS';
                break;
              case 'firebase':
                techComponent = <Firebase />;
                tooltip = 'Firebase';
                break;
              case 'html':
                techComponent = <HTML />;
                tooltip = 'HTML';
                break;
              case 'javascript':
                techComponent = <JavaScript />;
                tooltip = 'JavaScript';
                break;
              case 'typescript':
                techComponent = <TypeScript />;
                tooltip = 'TypeScript';
                break;
              case 'node':
                techComponent = <NodeJS />;
                tooltip = 'NodeJS';
                break;
              case 'sass':
                techComponent = <Sass />;
                tooltip = 'SASS';
                break;
              case 'jest':
                techComponent = <Jest />;
                tooltip = 'Jest';
                break;
              case 'babel':
                techComponent = <Babel />;
                tooltip = 'Babel';
                break;
              case 'webpack':
                techComponent = <Webpack />;
                tooltip = 'Webpack';
                break;
              case 'eslint':
                techComponent = <ESLint />;
                tooltip = 'ESLint';
                break;
            }

            return (
              <DevIcon tooltip={tooltip} key={tech}>
                {techComponent}
              </DevIcon>
            );
          })}
        </div>
      </div>

      <div className='project__content'>
        <div className='project__text'>
          {data.description &&
            data.description.map(({ type, value }) => {
              if (type === 'header')
                return (
                  <h4 className='project__text-header' key={value}>
                    {value}
                  </h4>
                );
              else
                return (
                  <p className='project__text-p' key={value}>
                    {value}
                  </p>
                );
            })}
        </div>

        <div className='project__screenshots'>
          <Carousel imageArray={data.screenshots} />
        </div>
      </div>
    </article>
  );
}

export default Project;
