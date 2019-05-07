package runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features = { "src/test/resources/Featurefiles" }, dryRun = false, strict = false, monochrome = true, plugin = {
		"pretty", "html:target/cucumber" }, glue = {"uk/os/stepdefinations"}, tags = {"@SignIn"})
public class RunTest {

}