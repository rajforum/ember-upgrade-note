
self.deprecationWorkflow = self.deprecationWorkflow || {};
self.deprecationWorkflow.config = {
    workflow: [
    //v3.0
        {
            handler: 'silence',
            matchId: 'old-deprecate-method-paths',
        },
    //v3.1
        {
            handler: 'silence',
            matchId: 'getting-the-each-property',
        },
        {
            handler: 'silence',
            matchId: 'use-notifypropertychange-instead-of-propertywillchange-and-propertydidchange',
        },
    //v3.2
        {
            handler: 'silence',
            matchId: 'ember-console.deprecate-logger',
        },
        {
            handler: 'silence',
            matchId: 'ember-routing.route-router',
        },
        {
            handler: 'silence',
            matchId: 'ember-meta.descriptor-on-object',
        },
    //v3.3
        {
            handler: 'silence',
            matchId: 'ember-runtime.deprecate-copy-copyable',
        },
        {
            handler: 'silence',
            matchId: 'ember-env.old-extend-prototypes',
        },
        {
            handler: 'silence',
            matchId: 'jquery-event',
        },
    //v3.4
        {
            handler: 'silence',
            matchId: 'ember-component.send-action',
        },
    //v3.6
        {
            handler: 'silence',
            matchId: 'ember-polyfills.deprecate-merge',
        },
        {
            handler: 'silence',
            matchId: 'array.new-array-wrapper',
        },
        {
            handler: 'silence',
            matchId: 'object.new-constructor',
        },
        {
            handler: 'silence',
            matchId: 'events.remove-all-listeners',
        },
        {
            handler: 'silence',
            matchId: 'remove-handler-infos',
        },
        {
            handler: 'silence',
            matchId: 'deprecate-router-events',
        },
        {
            handler: 'silence',
            matchId: 'transition-state',
        },
    //v3.8
        {
            handler: 'silence',
            matchId: 'component-manager-string-lookup',
        },
    //v3.9
        {
            handler: 'silence',
            matchId: 'application-controller.router-properties',
        },
        {
            handler: 'silence',
            matchId: 'computed-property.override',
        },
        {
            handler: 'silence',
            matchId: 'computed-property.property',
        },
        {
            handler: 'silence',
            matchId: 'computed-property.volatile',
        },
        {
            handler: 'silence',
            matchId: 'object.alias-method',
        },
        {
            handler: 'silence',
            matchId: 'jquery-apis',
        },
    //v3.11
        {
            handler: 'silence',
            matchId: 'function-prototype-extensions.observes',
        },
        {
            handler: 'silence',
            matchId: 'function-prototype-extensions.on',
        },
        {
            handler: 'silence',
            matchId: 'function-prototype-extensions.property',
        },
    //v3.13
        {
            handler: 'silence',
            matchId: 'action.mouseenter-leave-move',
        },
        {
            handler: 'silence',
            matchId: 'component.mouseenter-leave-move',
        },
    //v3.15
        {
            handler: 'silence',
            matchId: 'ember-component.is-visible',
        },
        {
            handler: 'silence',
            matchId: 'ember.partial',
        },
    //v3.16
        {
            handler: 'silence',
            matchId: 'ember.globals-resolver',
        },
    //v3.21
        {
            handler: 'silence',
            matchId: 'ember-metal.get-with-default',
        },
        {
            handler: 'silence',
            matchId: 'meta-destruction-apis',
        },
    //v3.24
        {
            handler: 'silence',
            matchId: 'ember-string.loc',
        },
        {
            handler: 'silence',
            matchId: 'ember-source-deprecation-without-for',
        },
        {
            handler: 'silence',
            matchId: 'ember-source-deprecation-without-since',
        },
        {
            handler: 'silence',
            matchId: 'ember-string.prototype-extensions',
        },
        {
            handler: 'silence',
            matchId: 'ember-utils.try-invoke',
        },
    //v3.25
        {
            handler: 'silence',
            matchId: 'ember-string.htmlsafe-ishtmlsafe',
        },
    //v3.26
        {
            handler: 'silence',
            matchId: 'array-observers',
        },
        {
            handler: 'silence',
            matchId: 'attrs-arg-access',
        },
        {
            handler: 'silence',
            matchId: '3-0-browser-support-policy',
        },
        {
            handler: 'silence',
            matchId: 'class-binding-and-class-name-bindings-in-templates',
        },
        {
            handler: 'silence',
            matchId: 'editions.classic',
        },
        {
            handler: 'silence',
            matchId: 'has-block-and-has-block-params',
        },
        {
            handler: 'silence',
            matchId: 'implicit-injections',
        },
        {
            handler: 'silence',
            matchId: 'ember-glimmer.link-to.positional-arguments',
        },
        {
            handler: 'silence',
            matchId: 'manager-capabilities.components-3-4',
        },
        {
            handler: 'silence',
            matchId: 'manager-capabilities.modifiers-3-13',
        },
        {
            handler: 'silence',
            matchId: 'optional-feature.application-template-wrapper',
        },
        {
            handler: 'silence',
            matchId: 'optional-feature.jquery-integration',
        },
        {
            handler: 'silence',
            matchId: 'optional-feature.template-only-glimmer-components',
        },
        {
            handler: 'silence',
            matchId: 'routing.transition-methods', // [until: 5.0.0]
        },
        {
            handler: 'silence',
            matchId: 'this-property-fallback',
        },
        {
            handler: 'silence',
            matchId: 'ember-glimmer.with-syntax',
        },
    //v3.27
        {
            handler: 'silence',
            matchId: 'argument-less-helper-paren-less-invocation',
        },
        {
            handler: 'silence',
            matchId: 'deprecated-run-loop-and-computed-dot-access',
        },
        {
            handler: 'silence',
            matchId: 'ember.built-in-components.import',
        },
        {
            handler: 'silence',
            matchId: 'ember.built-in-components.legacy-arguments',
        },
        {
            handler: 'silence',
            matchId: 'ember.built-in-components.legacy-attribute-arguments',
        },
        {
            handler: 'silence',
            matchId: 'ember.built-in-components.reopen',
        },
        {
            handler: 'silence',
            matchId: 'ember.component.reopen',
        },
        {
            handler: 'silence',
            matchId: 'ember-global',
        },
        {
            handler: 'silence',
            matchId: 'ember.link-to.disabled-when',
        },
        {
            handler: 'silence',
            matchId: 'route-disconnect-outlet',
        },
        {
            handler: 'silence',
            matchId: 'route-render-template',
        },
        {
            handler: 'silence',
            matchId: 'template-compiler.registerPlugin',
        },
    //v3.28
        {
            handler: 'silence',
            matchId: 'setting-on-hash', // [until: 4.4.0]
        },
        {
            handler: 'silence',
            matchId: 'autotracking.mutation-after-consumption',
        },
        {
            handler: 'silence',
            matchId: 'events.inherited-function-listeners',
        },
    //Misc [Third Package releated]
        { 
            handler: 'silence', 
            matchId: 'ember-source.deprecation-without-for' 
        },
        { 
            handler: 'silence', 
            matchId: 'ember-source.deprecation-without-since' 
        },
        {
            handler: 'silence',
            matchId: 'ember-file-upload.deprecate-non-camel-case-events',
        },
        {
            handler: 'silence',
            matchId: 'ember-views.curly-components.jquery-element'
        },
        {
            handler: 'silence',
            matchId: 'ember-polyfills.deprecate-assign'
        }
    ]
};
