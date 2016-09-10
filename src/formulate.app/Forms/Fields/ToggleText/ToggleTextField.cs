namespace formulate.app.Forms.Fields.ToggleText
{
    using System;
    public class ToggleTextField : IFormFieldType
    {
        public string Directive => "formulate-toggle-text-field";
        public string TypeLabel => "Toggle Text";
        public string Icon => "icon-document-dashed-line";
        public Guid TypeId => new Guid("DC2D46B29EA940F0B1750DBF3F0853A6");
        public object DeserializeConfiguration(string configuration)
        {
            return null;
        }
    }
}