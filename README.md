## Payment Form - Angular Pipes

Small form made in Angular to practice Angular pipes and its concepts.

Height template and property is there for decimal practice purposes

### Topics Covered

_TitleCasePipe, using Bootstrap in Angular, datePipe, currencyPipe, jsonPipe, creating custom pipes_

1. Pipes: use pipes form Angular documentation if needed, in an interpolation property add straight slash and then the name of the pipe.
2. datePipe: helpful to format dates in Angular.
3. currencyPipe: helpful to format and customize currencies in Angular, we can put the country ISO to format them to the right currency.
4. jsonPipe: useful for debugging. Will show on screen the json version of it.
5. To create custom pipes: in the CLI we type 'ng g pipe nameHere', this will create a pipe in our code and that file we can then use and manipulate to make or own pipe. Once we have the setup we can use the pipe as we use any other. In this case the pipe is _convert_ to convert miles to kilometers. We can add args to our custom pipes as we do in other pipes.
6. We can reuse pipes in any templates, including directives (like ngIf) however to do so we need to wrap them in parenthesis to make them work as this is the valid syntax.
7. We can also use more than one pipe in our interpolation.
