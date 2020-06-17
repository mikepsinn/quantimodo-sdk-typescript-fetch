import { expect } from 'chai';
import { DefaultApi } from '../apis';
import { Configuration } from '../configuration';


let config: Configuration;

before(function () {
    config = new Configuration();
    config.accessToken = "foobar";
    config.apiKey = (securityName: string) => {
        // for multiple apiKey security
        if (securityName === "api_key") {
            return "foobar";
        }
        return;
    };
    config.username = "foo";
    config.password = "bar";
});

describe('VariableApiFactory', () => {


    function runSuite(description: string, requestOptions?: any): void {

        describe(description, () => {

            const fixture: Variable = createTestFixture();

            it('should add and delete Variable', () => {
                return VariableApiFactory(config).addVariable(fixture, requestOptions).then(() => {
                });
            });

            it('should get Variable by ID', () => {
                let instance = new DefaultApi();
                return instance.getVariable({id:1398}).then((result: Variable) => {
                    return expect(result).to.deep.equal(fixture);
                });
            });

            it('should update Variable by ID', () => {
                return VariableApiFactory(config).getVariableById(fixture.id, requestOptions).then((result: Variable) => {
                    result.name = 'newname';
                    return VariableApiFactory(config).updateVariable(result, requestOptions).then(() => {
                        return VariableApiFactory(config).getVariableById(fixture.id, requestOptions).then((result: Variable) => {
                            return expect(result.name).to.deep.equal('newname');
                        });
                    });
                });
            });

            it('should delete Variable', () => {
                return VariableApiFactory(config).deleteVariable(fixture.id, requestOptions);
            });

            it('should not contain deleted Variable', () => {
                return VariableApiFactory(config).getVariableById(fixture.id, requestOptions).then((result: Variable) => {
                    return expect(result).to.not.exist;
                }, (err: any) => {
                    return expect(err).to.exist;
                });
            });
        });
    }

    runSuite('without custom request options');

    runSuite('with custom request options', {
        credentials: 'include',
        mode: 'cors'
    });

});

function createTestFixture(ts = Date.now()) {
    const variableCategory: VariableCategory = {
        'id': ts,
        'name': `variableCategory${ts}`,
    };

    const Variable: Variable = {
        'id': ts,
        'name': `Variable${ts}`,
        'variableCategory': variableCategory,
        'photoUrls': ['http://foo.bar.com/1', 'http://foo.bar.com/2'],
        'status': Variable.StatusEnum.Available,
        'tags': []
    };

    return Variable;
};
