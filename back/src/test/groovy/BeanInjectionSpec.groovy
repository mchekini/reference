import javax.inject.Inject

import com.example.demo.BackApplication
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.test.context.ContextConfiguration
import spock.lang.Specification

@SpringBootTest
@ContextConfiguration(classes = [BackApplication.class])
class BeanInjectionSpec extends Specification {

    @Inject
    BackApplication app

    void setup() {
        println 'init in progress'
    }

    def 'it should run the app'() {
        expect:
        app
    }

}
