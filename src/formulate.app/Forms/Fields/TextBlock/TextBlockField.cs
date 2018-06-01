namespace formulate.app.Forms.Fields.TextBlock
{
    using System;
    public class TextBlockField : IFormFieldType
    {
        public string Directive => "formulate-text-block-field";
        public string TypeLabel => "Text Block";
        public string Icon => "icon-formulate-text";
        public Guid TypeId => new Guid("1B9B883D38DE42D9B9961242F83E5079");
        public object DeserializeConfiguration(string configuration)
        {
            return null;
        }
    }
}