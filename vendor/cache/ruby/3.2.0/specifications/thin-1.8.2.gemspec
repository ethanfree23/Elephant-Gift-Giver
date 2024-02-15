# -*- encoding: utf-8 -*-
# stub: thin 1.8.2 ruby lib
# stub: ext/thin_parser/extconf.rb

Gem::Specification.new do |s|
  s.name = "thin".freeze
  s.version = "1.8.2".freeze

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.metadata = { "changelog_uri" => "https://github.com/macournoyer/thin/blob/master/CHANGELOG", "source_code_uri" => "https://github.com/macournoyer/thin" } if s.respond_to? :metadata=
  s.require_paths = ["lib".freeze]
  s.authors = ["Marc-Andre Cournoyer".freeze]
  s.date = "2023-03-31"
  s.email = "macournoyer@gmail.com".freeze
  s.executables = ["thin".freeze]
  s.extensions = ["ext/thin_parser/extconf.rb".freeze]
  s.files = ["bin/thin".freeze, "ext/thin_parser/extconf.rb".freeze]
  s.homepage = "https://github.com/macournoyer/thin".freeze
  s.licenses = ["GPL-2.0+".freeze, "Ruby".freeze]
  s.required_ruby_version = Gem::Requirement.new(">= 1.8.5".freeze)
  s.rubygems_version = "3.5.6".freeze
  s.summary = "A thin and fast web server".freeze

  s.installed_by_version = "3.5.6".freeze if s.respond_to? :installed_by_version

  s.specification_version = 4

  s.add_runtime_dependency(%q<rack>.freeze, [">= 1".freeze, "< 3".freeze])
  s.add_runtime_dependency(%q<eventmachine>.freeze, ["~> 1.0".freeze, ">= 1.0.4".freeze])
  s.add_runtime_dependency(%q<daemons>.freeze, ["~> 1.0".freeze, ">= 1.0.9".freeze])
end
