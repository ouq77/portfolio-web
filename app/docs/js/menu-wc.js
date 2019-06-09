'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">Louw Swart // Portfolio</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="dependencies.html" data-type="chapter-link">
                                <span class="icon ion-ios-list"></span>Dependencies
                            </a>
                        </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse" ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-e08c5c3298a38c522d7a269c718aa5f4"' : 'data-target="#xs-components-links-module-AppModule-e08c5c3298a38c522d7a269c718aa5f4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-e08c5c3298a38c522d7a269c718aa5f4"' :
                                            'id="xs-components-links-module-AppModule-e08c5c3298a38c522d7a269c718aa5f4"' }>
                                            <li class="link">
                                                <a href="components/AboutComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AboutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ContactComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ContactComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ContactFormComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ContactFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EducationComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EducationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ExperienceComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ExperienceComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SkillsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SkillsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TravelComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TravelComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TravelMapComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TravelMapComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-e08c5c3298a38c522d7a269c718aa5f4"' : 'data-target="#xs-injectables-links-module-AppModule-e08c5c3298a38c522d7a269c718aa5f4"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-e08c5c3298a38c522d7a269c718aa5f4"' :
                                        'id="xs-injectables-links-module-AppModule-e08c5c3298a38c522d7a269c718aa5f4"' }>
                                        <li class="link">
                                            <a href="injectables/ContactService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ContactService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/EducationService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>EducationService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/HeaderService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>HeaderService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/MapApiLoaderService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>MapApiLoaderService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/TravelService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>TravelService</a>
                                        </li>
                                    </ul>
                                </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-AppModule-e08c5c3298a38c522d7a269c718aa5f4"' : 'data-target="#xs-pipes-links-module-AppModule-e08c5c3298a38c522d7a269c718aa5f4"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-AppModule-e08c5c3298a38c522d7a269c718aa5f4"' :
                                            'id="xs-pipes-links-module-AppModule-e08c5c3298a38c522d7a269c718aa5f4"' }>
                                            <li class="link">
                                                <a href="pipes/BadgeUrlPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BadgeUrlPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/MemberDatePipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MemberDatePipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/ScorePipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ScorePipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/TrimPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TrimPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/VideoUrlPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">VideoUrlPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Airport.html" data-type="entity-link">Airport</a>
                            </li>
                            <li class="link">
                                <a href="classes/AppService.html" data-type="entity-link">AppService</a>
                            </li>
                            <li class="link">
                                <a href="classes/City.html" data-type="entity-link">City</a>
                            </li>
                            <li class="link">
                                <a href="classes/ContactMessage.html" data-type="entity-link">ContactMessage</a>
                            </li>
                            <li class="link">
                                <a href="classes/ExperienceService.html" data-type="entity-link">ExperienceService</a>
                            </li>
                            <li class="link">
                                <a href="classes/FooterService.html" data-type="entity-link">FooterService</a>
                            </li>
                            <li class="link">
                                <a href="classes/Icon.html" data-type="entity-link">Icon</a>
                            </li>
                            <li class="link">
                                <a href="classes/MapUtil.html" data-type="entity-link">MapUtil</a>
                            </li>
                            <li class="link">
                                <a href="classes/MarkerUtil.html" data-type="entity-link">MarkerUtil</a>
                            </li>
                            <li class="link">
                                <a href="classes/Point.html" data-type="entity-link">Point</a>
                            </li>
                            <li class="link">
                                <a href="classes/PolylineUtil.html" data-type="entity-link">PolylineUtil</a>
                            </li>
                            <li class="link">
                                <a href="classes/Port.html" data-type="entity-link">Port</a>
                            </li>
                            <li class="link">
                                <a href="classes/Size.html" data-type="entity-link">Size</a>
                            </li>
                            <li class="link">
                                <a href="classes/SkillService.html" data-type="entity-link">SkillService</a>
                            </li>
                            <li class="link">
                                <a href="classes/Station.html" data-type="entity-link">Station</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/IAirport.html" data-type="entity-link">IAirport</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICity.html" data-type="entity-link">ICity</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IErrorMessage.html" data-type="entity-link">IErrorMessage</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IIcon.html" data-type="entity-link">IIcon</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ImageIds.html" data-type="entity-link">ImageIds</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IPoint.html" data-type="entity-link">IPoint</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IPort.html" data-type="entity-link">IPort</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ISize.html" data-type="entity-link">ISize</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IStation.html" data-type="entity-link">IStation</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Job.html" data-type="entity-link">Job</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Link.html" data-type="entity-link">Link</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PolylineIconSequence.html" data-type="entity-link">PolylineIconSequence</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RailTrip.html" data-type="entity-link">RailTrip</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RailTrips.html" data-type="entity-link">RailTrips</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/School.html" data-type="entity-link">School</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Skill.html" data-type="entity-link">Skill</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/WrappedError.html" data-type="entity-link">WrappedError</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});